import React from 'react'
import style from '../../styles/Home.module.scss'

const SectionTwo = () => {
  return (
    <section>
      <div className={style.SectionTwoFeatures}>
        <h2>FEATURES</h2>
        <p>
          Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're talking a business call or just in your own personal space, the auto on/off and pause features ensure that you'wll never miss a beat.
        </p>
        <p>
          The advanced Active Noise Cancellation with build-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluethooth 5.0 complian connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior soud, cutting-edge technology, and a modern design aesthetic. 
        </p>
      </div>
      <div className={style.SectionTwoBox}>
        <h2>IN THE BOX</h2>
        <ul>
          <li>
            <span className={style.BoxAmount}>1x</span>
            <span>Headphone Unit</span>
          </li>
          <li>
            <span className={style.BoxAmount}>2x</span>
            <span>Replacement Earcups</span>
          </li>
          <li>
            <span className={style.BoxAmount}>1x</span>
            <span>User Manual</span>
          </li>
          <li>
            <span className={style.BoxAmount}>1x</span>
            <span>3.5mm 5m Audio Cable</span>
          </li>
          <li>
            <span className={style.BoxAmount}>1x</span>
            <span>Travel Bag</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SectionTwo
