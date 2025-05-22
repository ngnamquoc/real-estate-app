import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import DiscoverSection from './DiscoverSection'
import CallToAction from './CallToAction'
import FooterSection from './FooterSection'

const landing = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <DiscoverSection/>
      <CallToAction/>
      <FooterSection/>
    </div>
  )
}

export default landing
