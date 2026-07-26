import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Pillars from '@/components/Pillars'
import Audience from '@/components/Audience'
import Partnership from '@/components/Partnership'
import FollowUpForm from '@/components/FollowUpForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <FollowUpForm />
      <About />
      <Stats />
      <Pillars />
      <Audience />
      <Partnership />
      <Footer />
    </>
  )
}
