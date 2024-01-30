import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import EventOverview from "./components/hero/EventOverview";
import Statistics from "./components/hero/Statistics";
import TopHighlights from "./components/hero/TopHighlights";
import WhoWillAttend from "./components/hero/WhoWillAttend";
import WhyAttend from "./components/hero/WhyAttend";
import Testimonials from "./components/hero/Testimonials";
import Footer from "./components/footer/Footer";

import Schedule from "./components/schedule/Schedule";
import Speakers from './components/speakers/Speakers';
import "./App.css";
function App() {
  return (
    <Router>
    <div className="app-bg"></div>
    <Navbar />
    <Routes>
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/" element={
        <>
          <Carousel />
          <EventOverview />
          <Statistics />
          <TopHighlights />
          <WhoWillAttend />
          <WhyAttend />
          <Testimonials />
        </>
      } />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
