import React from 'react'
import '../../App.css'
import Cards from '../../components/Card/Cards'
import ContactUs from '../../components/ContactUs/ContactUs'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function Home() {
  return (
    <>
      
      <HeroSection />
      <Cards />
      <ContactUs/>
          
    </>
  )
}
