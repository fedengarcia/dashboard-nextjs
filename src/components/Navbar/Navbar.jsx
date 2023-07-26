import Link from 'next/link'
import styles from "./navbarStyle.module.scss";

const links = [{
        label: 'Home',
        route: '/'
    },
    {
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      label: 'Post',
      route: '/post'
    }
  
  ]   

export function Navbar () {
  
  return (
    <header className={styles.headerContainer}>
        <ul>
            {links?.map(({label,route}) => (
            <li key={route}>
                {console.log(route)}
                <Link href={route} >{label}</Link>
            </li>
            ))}
            
        </ul>
  </header>
  )
}