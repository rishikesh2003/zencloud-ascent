import HomeMain from "../Components/Home/Home";
import Work from "../Components/Home/Work";
import Testimonial from "../Components/Home/Testimonial";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="App">
      <HomeMain />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
