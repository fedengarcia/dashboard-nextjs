'use client'
import Link from 'next/link'
import styles from "./navbarStyle.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';



export function Navbar ({links, wallet}) {
  
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
        {wallet && <FontAwesomeIcon onClick={handleOnClick} icon={faWallet} size="1x"/>}
  </div>
  )
}