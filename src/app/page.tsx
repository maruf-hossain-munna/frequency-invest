import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroArea from './components/HeroArea'
import StartInvesting from './components/StartInvesting'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Reasons from './components/Reasons'
import Contact from './components/Contact'
import Blog from './components/Blog'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroArea />
      <StartInvesting />
      <AboutUs />
      <Reasons />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}
