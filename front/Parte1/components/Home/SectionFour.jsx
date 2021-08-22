import React from 'react'
import style from '../../styles/Home.module.scss'
import ProductCard from '../ProductCard'
import SectionCard from '../SectionCard'

import image4 from '../../public/images/image4.png'
import image5 from '../../public/images/image5.png'
import image6 from '../../public/images/image6.png'
import image7 from '../../public/images/image7.png'
import image8 from '../../public/images/image8.png'
import image9 from '../../public/images/image9.png'

const SectionFour = () => {

  const products = [
    {
      id: "Product1",
      title: "XX99 MARK I",
      image: image4,
      link: "/"    
    },
    {
      id: "Product2",
      title: "XX59",
      image: image5,
      link: "/"    
    },
    {
      id: "Product3",
      title: "ZX9 SPEAKER",
      image: image6,
      link: "/"    
    },
  ]

  const sections = [
    {
      id: "Section1",
      title: "HEADPHONES",
      image: image7,
      link: "/"    
    },
    {
      id: "Section2",
      title: "SPEAKERS",
      image: image8,
      link: "/"    
    },
    {
      id: "Section3",
      title: "EARPHONES",
      image: image9,
      link: "/"    
    },
  ]
  return (
    <section className={style.SectionFour}>
      <div>
        <h2>YOU MAY ALSO LIKE</h2>
      </div>
      <div className={style.Products}>
        {products.map(product => (
          <ProductCard 
            {...product}
            key={product.id}
          />
        ))}
      </div>
      <div className={style.Sections}>
        {sections.map(section => (
          <SectionCard 
            {...section}
            key={section.id}
          />
        ))}
      </div>
    </section>
  )
}

export default SectionFour
