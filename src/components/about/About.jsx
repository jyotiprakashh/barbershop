import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://stat1.bollywoodhungama.in/wp-content/uploads/2022/01/Celebrity-hairstylist-Jawed-Habib-apologises-after-spitting-on-a-woman%E2%80%99s-head-NCW-seeks-legal-action.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Our Shop</h1>
        <p className="a-sub">
          Caring hair since 2000
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Best barber award</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo quas ea voluptatem adipisci harum placeat quasi, a veniam facere fugiat sed debitis similique odio ab, asperiores sunt temporibus aspernatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
