import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="flex justify-between p-4 bg-gradient-to-br from-purple-800 via-purple-600 to-pink-400 px-40">
      <div className="flex items-center  justify-center">
        <h1 className="text-white font-bold sm">
          <Link href="/">
            <a>Fluidos</a>
          </Link>
        </h1>
      </div>
      <ul className="flex">
        <li className="m-4 text-gray-200 cursor-pointer py-2 px-4 hover:text-gray-300">
          <Link href="/">
            <a>About us</a>
          </Link>
        </li>
        <li className="m-4 text-gray-200 cursor-pointer py-2 px-4 hover:text-gray-300">
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li className="m-4 text-gray-200 cursor-pointer py-2 px-4 hover:text-gray-300">
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
        <li className="bg-white text-pink-400 font-bold py-2 px-4 rounded-full m-4">
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
