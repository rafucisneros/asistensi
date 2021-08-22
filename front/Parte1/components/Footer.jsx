import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.MainSection}>
        <div className={styles.SectionOne}>
          <h2>audiophile</h2>
          <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit out demo facility - we're open 7 days a week.</p>
        </div>
        <div className={styles.SectionTwo}>
          <nav>
            <Link href="/">
              <a className={styles.FooterLink}>HOME</a>
            </Link>
            <Link href="/">
              <a className={styles.FooterLink}>HEADPHONES</a>
            </Link>
            <Link href="/">
              <a className={styles.FooterLink}>SPEAKERS</a>
            </Link>
            <Link href="/">
              <a className={styles.FooterLink}>EARPHONES</a>
            </Link>
          </nav>
          <nav>
            <Link href="/">
              <a className={styles.FooterLinkNetworks}>
                <FontAwesomeIcon icon={faFacebookSquare}/>
              </a>
            </Link>
            <Link href="/">
              <a className={styles.FooterLinkNetworks}>
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </Link>
            <Link href="/">
              <a className={styles.FooterLinkNetworks}>
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.Copyright}>
        <p>Copyright 2021. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
