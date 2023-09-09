import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider'
import PopularMenu from '../components/popular-menu/PopularMenu'
import ChooseUse from '../components/choose-us/ChooseUse'
import MenuPack from '../components/menu-pack/MenuPack'
import Testimonials from '../components/testimonials/Testimonials'
import Download from '../components/download.section/Download'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUse />
      <MenuPack />
      <Testimonials />
      <Download />
      <Footer />
    </Fragment>
  )
}

export default Home
