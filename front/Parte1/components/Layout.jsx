import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.MainSection}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
