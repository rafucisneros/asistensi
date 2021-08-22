import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import iphone from '../public/images/iphone.svg'
import phone1 from '../public/images/phone1.svg'


// import style from '../styles/Home.module.scss'

const Home = () => {
  const [ displayingImage, setDisplayingImage ] = useState(0)
  const images = [phone1, iphone]

  const handleNextImage = () => {
    setDisplayingImage(displayingImage + 1)
  }

  const handlePreviousImage = () => {
    if(displayingImage !== 0){
      setDisplayingImage(displayingImage - 1)
    } else {
      setDisplayingImage(1)
    }
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-pink-400 px-40 flex flex-col">
      <nav className="flex justify-between p-4">
        <div className="flex items-center  justify-center">
          <h1 className="text-white font-bold sm">Fluidos</h1>
        </div>
        <ul className="flex">
          <li className="m-4 text-gray-200 cursor-pointer py-2 px-4 hover:text-gray-300">About us</li>
          <li className="m-4 text-gray-200 cursor-pointer py-2 px-4 hover:text-gray-300">Services</li>
          <li className="m-4 text-gray-200 cursor-pointer py-2 px-4 hover:text-gray-300">Contact</li>
          <li className="bg-white text-pink-400 font-bold py-2 px-4 rounded-full m-4">Login</li>
        </ul>
      </nav>
      <section className="flex flex-1">
        <div className="text-white w-1/2 h-full flex flex-col justify-between">
          <div className="flex flex-col justify-between h-1/2 mt-10">
            <h1 className="font-bold text-5xl">Special Way <br /> To Realice Your Own <br /> Business.</h1>
            <p className="text-pink-200">Are you going to make your website? Share your idea with us o make it by yourself with our project maker software. Make it happens today!</p>
            <div className="">
              <Link href="/">
                <a className="text-white font-bold py-2 px-4 rounded-full m-4" style={{background: "#42c8e6"}}>Get it Started</a>
              </Link>
              <Link href="/">
                <a className="bg-transparent text-white font-semibold py-2 px-4 border border-white hover:text-green-300 hover:border-green-300 rounded-2xl m-4">Watch Demo</a>
              </Link>
              <Link href="/users">
                <a className="bg-transparent text-white font-semibold py-2 px-4 border border-white hover:text-green-300 hover:border-green-300 rounded-2xl m-4">Our Users</a>
              </Link>
            </div>
          </div>
          <div className="text-gray-400 pb-20 text-xl">
            Find us Here --- <span>
              <FontAwesomeIcon icon={faFacebookF}/>
            </span> <span>
              <FontAwesomeIcon icon={faLinkedin}/>
            </span> <span>
              <FontAwesomeIcon icon={faInstagram}/>
            </span> <span>
              <FontAwesomeIcon icon={faYoutube}/>
            </span> <span>
              <FontAwesomeIcon icon={faTwitter}/>
            </span>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer" onClick={handlePreviousImage}/>
          <Image 
            src={images[displayingImage % 2]}
            height={600}
            width={300}
          />
          <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" onClick={handleNextImage}/>
        </div>
      </section>
    </div>
  )
}

export default Home
