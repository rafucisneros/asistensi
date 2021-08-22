import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center flex-1 mt-14">
        <div className="w-4/5">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
