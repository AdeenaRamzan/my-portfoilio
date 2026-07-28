import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { FeaturedProjects } from '@/components/featured-projects'
import { AllProjects } from '@/components/all-projects'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Certifications } from '@/components/certifications'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <AllProjects />
        <Skills />
        <Experience />
        <Certifications />
        <ContactFooter />
      </main>
    </>
  )
}
