import BannerBackground from "../../Assets/images/home-banner-background.png";
import BannerImage from "../../Assets/images/handy-meditating-cloud.gif";
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
          <h1 className="primary-heading">Nurturing Wellness, One Yogi at a Time.</h1>
          <p className="primary-text">
          Unveil the philosophy behind ZenCloud Ascent.
          </p>
          <Link className="mobile-links" to={"/contact"}>
            <button className="secondary-button">
              <>
                Contact us <FiArrowRight />
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
