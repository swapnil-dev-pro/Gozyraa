import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturedDestinations from '../components/FeaturedDestinations'
import HotelsSlider from '../components/HotelsSlider'
import Offers from '../components/Offers'
import ExploreBangladesh from '../components/ExploreBangladesh'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import PartnerBanner from '../components/PartnerBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <HeroSection />
      <FeaturedDestinations />
      <HotelsSlider />
      <Offers />
      <ExploreBangladesh />
      <Testimonials />
      <BlogSection />
      <PartnerBanner />
      <Footer />
    </div>
  )
}

export default Home