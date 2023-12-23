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
    <div className='bg-[#030A15]'>
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
