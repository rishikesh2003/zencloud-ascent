import ProfilePic from "../../Assets/images/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 style={{textAlign : 'center'}} className="primary-heading">What They Are Saying</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I joined ZenCloud Ascent seeking more than just yoga classes; I found a sanctuary of holistic well-being. The instructors radiate expertise and genuine passion for nurturing both the body and the mind. The diverse range of courses allowed me to tailor my journey, and the supportive community created an environment of encouragement and growth.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Sai Likhith S L D</h2>
      </div>
    </div>
  );
};

export default Testimonial;
