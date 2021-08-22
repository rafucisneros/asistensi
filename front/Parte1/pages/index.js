import React, { Fragment } from 'react'
import SectionOne from '../components/Home/SectionOne'
import SectionTwo from '../components/Home/SectionTwo'
import SectionThree from '../components/Home/SectionThree'
import SectionFour from '../components/Home/SectionFour'
import SectionFive from '../components/Home/SectionFive'
import Link from 'next/link'

import style from '../styles/Home.module.scss'


const Home = () => {
  return (
    <Fragment>
      <section className={style.BackButton}>
        <Link href="#">
          <a href="">Go Back</a>
        </Link>
      </section>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </Fragment>
  )
}

export default Home
