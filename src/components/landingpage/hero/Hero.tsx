// import Search from "./Search";
// import TextfieldDefault from "./TextfieldDefault";
import "./hero.css";

export const HeroFrame = () => {
  return (
    <div className="hero-frame">
      <div className="left">
        <div className="left-text">
          <p className="hungry-let-s-fix">
            <span className="hungry">Hungry?</span>
            <span className="fix-it">
              {" "}
              Let's Fix That 
              Order Your Favourites!
            </span>
          </p>

          <p className="small-text">
          Whether it's a classic comfort or a daring delight, we've got you covered. Dive into a realm of flavors and let your taste buds rejoice. 
          </p>
        </div>

        <div className="landing-search-div">
          <div className="landing-search-container">
            <img
              src="../images/search.svg"
              alt="Search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search for Restaurants"
              className="landing-search-input1"
            />
          </div>

          <div className="landing-search-wrapper">
            <button className="landing-search-btn">Search Now</button>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          className="ellipse"
          alt="Ellipse"
          src="../images/Herorightimg.png"
        />
      </div>

      {/* <div className="div-5">
        <img
          className="img"
          alt="Ellipse"
          src="../images/Ellipse 4.svg"
        />

        <img
          className="img"
          alt="Ellipse"
          src="../images/Ellipse 5.svg"
        />

        <img
          className="ellipse-2"
          alt="Ellipse"
          src="../images/Ellipse 3.svg"
        />

        <img
          className="ellipse-2"
          alt="Ellipse"
          src="../images/Ellipse 6.svg"
        />
      </div> */}
    </div>
  );
};

// {/* <TextfieldDefault
//         darkmode={false}
//         hintText={false}
//         label={false}
//         mandatory={false}
//         status="placeholder"
//         textfieldBaseIcon={<Search className="src/assets/landingpage-img/search.svg"/>} // Pass the Search component
//         textfieldBaseInputWithLabelClassName="textfield-default-instance"
//         textfieldBaseText="Search for Restaurants"
//         type="search" // Specify input type as 'search'
//         textfieldBaseTextClassName={undefined}
//               /> */}
