import React from 'react'
import Navbar from './Navbar'
import HeroColumnWrapper from './HeroColumnWrapper'
import FlowUpFeatures from './FlowUpFeatures'
import Hero from './Hero'
import FlowUpSection from './FlowUpSection'
import Testimonial from './Testimonial'
import NewsletterForm from './NewsletterForm'
import Footer from './Footer'

const homePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroColumnWrapper/>
      <FlowUpFeatures/>
      <Hero/>   
      <FlowUpSection/>
      <Testimonial></Testimonial>
      <NewsletterForm/>
    </div>
  )
}

export default homePage
