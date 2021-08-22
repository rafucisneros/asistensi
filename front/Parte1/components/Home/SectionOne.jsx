import React, { useState } from 'react'
import style from '../../styles/Home.module.scss'
import Image from 'next/image'
import xx99markII from '../../public/images/xx99markII.png'

const SectionOne = () => {
  
  const [productCount, setProductCount] = useState(1)

  const handleSumProductCount = () => {
    setProductCount(productCount + 1)
  }
  
  const handleSubstractProductCount = () => {
    if(productCount > 1){
      setProductCount(productCount - 1)
    }
  }

  return (
      <section>
        <div className={style.SectionOneImage}>
          <Image 
            src={xx99markII}
            alt="XX99 Mark II Headphones"
          />
        </div>
        <div className={style.SectionOneText}>
          <h5>NEW PRODUCT</h5>
          <h1> XX99 MARK II <br /> HEADPHONES</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. it redifines your premium headphone experience by reproducing the balanced depth and precison of studio-quality sound.</p>
          <h3 className={style.Price}>$ 2,999</h3>
          <div className={style.SectionOneAddToCart}>            
            <div className={style.ProductAmount}>
              <button onClick={handleSubstractProductCount} className={style.AmountButton}>-</button>
              <span>{productCount}</span>
              <button onClick={handleSumProductCount} className={style.AmountButton}>+</button>
            </div>
            <button type="button" className={style.HomeButton}>ADD TO CART</button>
          </div>
        </div>
      </section>
  )
}

export default SectionOne
