import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* HEADER DESIGN */}
      <header className="header">
        <a href="html" className="logo">
          <img className="mainLogo" src="./images/logo1.png" alt="logo" />Health Connect</a>
        <i className="fa-solid fa-bars" id="menu-icon" />
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#calories">Calories Counter</a>
          <a href="#diet-planner">Diet Planner</a>
          <a href="#meditation">Meditation</a>
          <a href="#breathing">Breathing</a>
          <div className="login">
            <a href="#login" target="_blank">
              Login
            </a>
            <a href="#home" id="dark-mode-toggle">
              <i className="fa-solid fa-user" />
            </a>
          </div>
        </nav>
      </header>
      {/* HOME SECTION DESIGN */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Welcome To</h3>
          <h1>Health Connect</h1>
          <br />
          <h3>
            Take Charge of Your <span className="multi-text" />
          </h3>
          <br />
          <p>
            Welcome to Health Connext! Personalized Diet Plans, Calorie
            Tracking, Meditation &amp; Breathing Exercises. Eat Well, Be
            Mindful. Personalized Plans, Calorie Counter, Meditation &amp;
            Breathing.
          </p>
          <div className="products">
            <a href="#home">
              <i className="fa-solid fa-calculator" />
            </a>
            <a href="#home">
              <i className="fa-solid fa-clipboard-list" />
            </a>
            <a href="#home">
              <i className="fa-solid fa-lungs" />
            </a>
            <a href="#home">
              <i className="fa-solid fa-heart-pulse" />
            </a>
          </div>
          <a href="#home" className="btn">
            Explore More
          </a>
        </div>
        <div className="home-img">
          <div className="meditation-img-border" />
          <img src="./images/doc-home.png" alt="" />
        </div>
      </section>
      <hr />
      {/* CALORIES COUNTER DESIGN */}
      <section className="calories" id="calories">
        <h2 className="heading">
          Calories <span>Counter</span>
        </h2>
        <div className="calories-content">
          <div className="search-content">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass search-icon" />
              <Link to="/calories">
                <input placeholder="Find Food Calories" />
              </Link>
            </div>
            <h3>
              Find thousands of foods and their respective calorie information.
            </h3>
            <a href="#calories">
              <img src="./images/calories-img.png" alt="" />
            </a>
          </div>
          <div className="calories-img">
            <div className="calories-img-border" />
            <img src="./images/calories-img-2.png" alt="" />
            {/* <a href="#" class="btn">Read More</a> */}
          </div>
        </div>
      </section>
      {/* DIET PLANNER SECTION DESIGN */}
      <section className="diet-planner" id="diet-planner">
        <h2 className="heading">
          My <span>Diet Planner</span>
        </h2>
        <div className="diet-planner-container">
          <div className="diet-planner-box plan1">
            <h3>Weight Loss Plan</h3>
            <p>
              Loss and maintain your ideal weight with your personalized plan.
            </p>
            <Link to="/diet">
              <a href="#diet-planner" className="btn">
                Create My Plan
              </a>  
            </Link>
          </div>
          <div className="diet-planner-box plan2">
            <h3>Weight Gain Plan</h3>
            <p>
              Gain and maintain your ideal Body Outline with your personalized
              plan.
            </p>
            <Link to="/diet">
              <a href="#diet-planner" className="btn">
                Create My Plan
              </a>  
            </Link>
          </div>
          <div className="plan3">
            <div className="diet-planner-box">
              <a className="diet-btn" href="#diet-planner">
                <i className="fa-solid fa-calendar-days" /> Add Day
              </a>
              <a className="diet-btn" href="#diet-planner">
                <i className="fa-solid fa-calendar-day" /> Day 1
              </a>
              <br />
              <br />
              <p>
                <span>You haven't added any meals to this day yet</span>
                <br />
                <br />
                Days can be specific weekdays or just types of days.
                <br />
                For example: a training or a rest day.
              </p>
              <a href="#diet-planner" className="diet-btn">
                + Add Meal
              </a>
            </div>
            <div className="diet-planner-img">
              <img src="./images/diet-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* MEDITATION SECTION DESIGN */}
      <section className="meditation" id="meditation">
        <h2 className="heading">
          Meditation <span>Exercise</span>
        </h2>
        <img
          className="meditation-img"
          src="./images/meditation-img-2.png"
          alt="meditation"
        />
        <div className="meditation-container">
          <a href="#meditation" className="btn">
            Mindfulness
          </a>
          <a href="#meditation" className="btn">
            Guided
          </a>
          <a href="#meditation" className="btn">
            Focus
          </a>
          <a href="#meditation" className="btn">
            Visualization
          </a>
          <a href="#meditation" className="btn explore">
            Explore More
          </a>
        </div>
      </section>
      {/* BREATHING SECTION DESIGN */}
      <section className="breathing" id="breathing">
        <h2 className="heading">
          Breathing <span>Exercises</span>
        </h2>
        <div className="controls">
          <button id="gentleBreath">Gentle Breath</button>
          {/* <button id="calmingBreath">Calming Breath</button>
  <button id="deepBreath">Deep Breath</button>
  <button id="rejuvenatingBreath">Rejuvenating Breath</button>
  <button id="stressRelief">Stress Relief</button>
  <button id="energyBoost">Energy Boost</button>
  <button id="soothingSleep">Soothing Sleep</button> */}
          <button id="stopButton">Stop</button>
          <button className="explore-more" id="explore-more">
            Explore More
          </button>
        </div>
        <div className="container" id="container">
          <div className="circle" />
          <p id="text" ></p>
          <div className="pointer-container">
            <span className="pointer" />
          </div>
          <div className="gradient-circle" />
        </div>
      </section>
      {/* FOOTER DESIGN */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © 2024 | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="fa-solid fa-angle-up" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Main;
