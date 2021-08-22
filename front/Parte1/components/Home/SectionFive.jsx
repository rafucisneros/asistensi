import React from 'react'
import style from '../../styles/Home.module.scss'
import Image from 'next/image'

import image10 from '../../public/images/image10.png'

const SectionFive = () => {
  return (
    <section className={style.SectionFive}>
      <div>
        <h1>BRINGING YOU THE <br /> <span>BEST</span> AUDIO GEAR</h1>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers and audio accessories. We have a large showroom and luxury demonstration rooms available for you to brose and experience a wide range of our products. Stop by our store to meet some of the fantasti people who make Audiophile the best place to bouy your portable audio equipment.</p>
      </div>
      <Image 
        src={image10}
        alt={"Man with Headphones"}
        width={400}
        height={1000}
        layout="intrinsic"
      />
    </section>
  )
}

export default SectionFive
