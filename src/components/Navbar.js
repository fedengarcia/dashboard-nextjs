import Link from 'next/link'

const links = [{
        label: 'Home',
        route: '/'
    },
    {
      label: 'Dashboard',
      route: '/dashboard'
    }
  
  ]   

export function Navbar () {
  
    return<header>
        <ul>
            {links?.map(({label,route}) => (
            <li key={route}>
                {console.log(route)}
                <Link href={route}>{label}</Link>
            </li>
            ))}
            
        </ul>
  </header>
}