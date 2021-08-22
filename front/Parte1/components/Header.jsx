import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 

const Header = () => {
  return (
    <nav className={styles.Header}>
      <div>
        <h1>audiophile</h1>
      </div>
      <div className={styles.Links}>
        <Link href="/">
          <a className={styles.HeaderLink}>HOME</a>
        </Link>
        <Link href="/">
          <a className={styles.HeaderLink}>HEADPHONES</a>
        </Link>
        <Link href="/">
          <a className={styles.HeaderLink}>SPEAKERS</a>
        </Link>
        <Link href="/">
          <a className={styles.HeaderLink}>EARPHONES</a>
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart}/>
      </div>
    </nav>
  )
}

export default Header
