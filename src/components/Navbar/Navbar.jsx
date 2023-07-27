'use client'
import Link from 'next/link'
import styles from "./navbarStyle.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';


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
  
  const handleOnClick = () => {
    alert("wallet connect")
  }

  return (
    <div className={styles.headerContainer}>
        <ul>
            {links?.map(({label,route}) => (
            <li key={route}>
                {console.log(route)}
                <Link href={route} >{label}</Link>
            </li>
            ))}
        </ul>
        <FontAwesomeIcon onClick={handleOnClick} icon={faWallet} size="1x"/>
  </div>
  )
}