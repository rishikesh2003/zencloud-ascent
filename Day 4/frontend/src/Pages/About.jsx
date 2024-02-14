import HomeMain from "../Components/About/Home";
import Work from "../Components/About/Work";
import Testimonial from "../Components/About/Testimonial";
import Footer from "../Components/Footer";
import AboutMain from '../Components/About/About'

function About() {
  return (
    <div className="App">
      <HomeMain />
      <AboutMain />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default About;
