import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/Home.module.scss'

const ProductCard = ({ title, image, link }) => {
  return (
    <div className={style.ProductCard}>
      <Image 
        src={image}
        alt={image}
      />
      <h3>{title}</h3>
      <Link href={link}>
        <a className={style.HomeButton}>SEE PRODUCT</a>
      </Link>
    </div>
  )
}

export default ProductCard
