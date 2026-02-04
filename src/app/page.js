import Journey from '../components/Journey'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceHighlights from '../components/ServiceHighlights'
import OurVehicles from '../components/OurVehicles'
import WhyWeAreDifferent from '../components/WhyWeAreDifferent'
import OurPackages from '../components/OurPackages'
import FAQs from '../components/FAQs'
import ContactUs from '../components/ContactUs'
import BannerSection from '@/components/BannerSection'
import Crossing from '@/components/crossing'
import { PopupProvider } from '@/context/PopupContext'
import { PopupForm } from '@/components/PopupForm'

export default function Home() {
  return (
    <div>
      {/* <PopupProvider>
        <PopupForm /> */}
     <BannerSection />
      <Journey />
      <About />
      <WhyChooseUs />
      <Crossing />
      <ServiceHighlights />
      <Crossing />
      <OurVehicles />
      <WhyWeAreDifferent/>
      <OurPackages />
      <FAQs />
      <ContactUs />
      {/* </PopupProvider> */}
    </div>
  )
}