import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider'
import PopularMenu from '../components/popular-menu/PopularMenu'
import ChooseUse from '../components/choose-us/ChooseUse'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUse />
    </Fragment>
  )
}

export default Home
