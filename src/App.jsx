import Navbar from "./components/header/Header"
import Carousel from "./components/carousel/Carousel"
import EventOverview from "./components/hero/EventOverview"
import Statistics from "./components/hero/Statistics"
import TopHighlights from "./components/hero/TopHighlights"
import WhoWillAttend from "./components/hero/WhoWillAttend"
import WhyAttend from "./components/hero/WhyAttend"
import Testimonials from "./components/hero/Testimonials"
import Footer  from "./components/footer/Footer"
import './App.css'
function App() {
  

  return (
    <>
    <div className="app-bg">
    </div>
      <Navbar />
      <Carousel />
      <EventOverview />
      <Statistics />
      <TopHighlights />
      <WhoWillAttend />
      <WhyAttend />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
