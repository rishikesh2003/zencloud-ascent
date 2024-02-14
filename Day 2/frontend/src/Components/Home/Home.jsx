import BannerBackground from "../../Assets/images/home-banner-background.png";
import BannerImage from "../../Assets/images/dizzy-woman.gif";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Welcome to ZenCloud Ascent.</h1>
          <p className="primary-text">
            Unlock Your Potential through Yoga Education. Your yoga path begins
            now.
          </p>
          <Link className="mobile-links" to={"/about"}>
            <button className="secondary-button">
              <>
                About us <FiArrowRight />
              </>
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
