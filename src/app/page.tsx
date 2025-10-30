import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Services from '@/components/Services'
import Waitlist from '@/components/Waitlist'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Services />
      <Waitlist />
      <Careers />
      <Contact />
      <Footer />
    </main>
  )
}
