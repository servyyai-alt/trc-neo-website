import React from 'react'
import HeroSection from '../Section/LandingPage/HeroSection'
import Layout from '../components/Layout'
import AboutSection from '../Section/LandingPage/AboutSectio'
import FinancingSection from '../Section/LandingPage/FinancingSection'
import GrowthSection from '../Section/LandingPage/SupportWealthSection'
import CuratedSolutionsSection from '../Section/LandingPage/CuratedSolutionsSection'
import SectionZoom from '../components/SectionZoom'

function LandingPage() {
  return (
    <Layout>

      <SectionZoom>
        <HeroSection />
      </SectionZoom>

      <SectionZoom>
        <AboutSection />
      </SectionZoom>

      <SectionZoom>
        <FinancingSection />
      </SectionZoom>

      <SectionZoom>
        <GrowthSection />
      </SectionZoom>

  
        <CuratedSolutionsSection />


    </Layout>
  );
}


export default LandingPage