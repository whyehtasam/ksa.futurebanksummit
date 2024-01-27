import Navbar from "./components/header/Navbar"
import Carousel from "./components/carousel/Carousel"
import EventOverview from "./components/hero/EventOverview"
import Statistics from "./components/hero/Statistics"
import TopHighlights from "./components/hero/TopHighlights"
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
    </>
  )
}

export default App
