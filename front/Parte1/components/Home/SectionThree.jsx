import React from 'react'
import style from '../../styles/Home.module.scss'
import Image from 'next/image'

import image1 from '../../public/images/image1.png'
import image2 from '../../public/images/image2.png'
import image3 from '../../public/images/image3.png'

const SectionThree = () => {
  return (
    <section className={style.SectionThree}>
      <div className={style.SectionThreeColumnOne}>
        <Image 
          src={image1}
          alt="Man with Headphones"
          width={400}
          height={250}
          layout="intrinsic"
          />
        <Image 
          src={image2}
          alt="Table with Headphones"
          width={400}
          height={250}
          layout="intrinsic"
          />
      </div>
      <div className={style.SectionThreeColumnTwo}>
        <Image 
          src={image3}
          alt="Headphones"
          // width={600}
          height={515}
          layout="intrinsic"
        />
      </div>
    </section>
  )
}

export default SectionThree
