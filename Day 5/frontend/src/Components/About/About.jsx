import AboutBackground from "../../Assets/images/about-background.png";
import AboutBackgroundImage from "../../Assets/images/about-meditating.gif";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Yoga is an important part of a balanced Life
        </h1>
        <p className="primary-text">
        Our mission is to make the benefits of yoga accessible to all, irrespective of age, background, or experience level. We envision a world where individuals lead balanced, fulfilling lives through the practice of yoga, contributing to a healthier and harmonious society.
        </p>
      </div>
    </div>
  );
};

export default About;
