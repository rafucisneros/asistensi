import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from '../styles/Home.module.scss'

const SectionCard = ({ title, image, link }) => {
  return (
    <div className={style.SectionCard}>
      <Image 
        src={image}
        alt={image}
      />
      <h5 className={style.SectionCardTitle}>{title}</h5>
      <Link href={link}>
        <a className={style.SectionCardLink}>SHOP</a>
      </Link>
    </div>
  )
}

export default SectionCard
