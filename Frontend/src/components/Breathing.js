import React from "react";
// import { Link } from "react-router-dom";
const Breathing = () => {
  return (
    <>
      {/* HEADER DESIGN */}
      <header className="header">
        <a href="home" className="logo">
          <img className="mainLogo" src="./images/logo1.png" alt="logo" />
          Health Connect
        </a>
        <i className="fa-solid fa-bars" id="menu-icon" />
        <nav className="navbar">
          <a href="home">Home</a>
          <a href="calories-counter-page">Calories Counter</a>
          <a href="diet-planner-page">Diet Planner</a>
          <a href="meditation-page">Meditation</a>
          <a href="breathing-page" className="active">
            Breathing
          </a>
          <a href="#login">Login</a>
          {/* <div className="login">
            <a href="#home" id="dark-mode-toggle">
              <i className="fa-solid fa-user" />
            </a>
          </div> */}
        </nav>
      </header>

      {/* Main content in calories page */}
      <section className="breathing-page" id="breathing-page">
        <h2 className="heading">
          About <span>Breathing Exercises</span>
        </h2>
        <h3 className="sub-heading">
          Professional Guide for Health and Wellness
        </h3>
        <h3 className="sub-heading">Introduction</h3>
        <p className="paragraph">
          Breathing exercises are essential for maintaining mental clarity,
          reducing stress, and improving overall well-being. This guide provides
          detailed instructions, durations, and benefits for various breathing
          exercises, suitable for all ages.
        </p>

        <main className="breathing-page-content" id="breathing-page-content">
          <div className="breathing-page-buttons">
            <div className="controls-2">
              <button id="gentleBreath">Gentle Breath</button>
              <button id="calmingBreath">Calming Breath</button>
              <button id="deepBreath">Deep Breath</button>
              <button id="rejuvenatingBreath">Rejuvenating Breath</button>
            </div>
            <div className="container" id="container">
              <div className="circle" />
              <p id="text-2"></p>
              <div className="pointer-container">
                <span className="pointer" />
              </div>
              <div className="gradient-circle" />
            </div>
            <div className="controls-2">
              <button id="stressRelief">Stress Relief</button>
              <button id="energyBoost">Energy Boost</button>
              <button id="soothingSleep">Soothing Sleep</button>
              <button className="explore-more" id="stopButton">
                Stop
              </button>
            </div>
          </div>

          <h2 className="sub-heading">1. Gentle Breath</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Induces calm and relaxation.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Gentle Breath is a foundational
            exercise for calming the mind and body. It's particularly useful for
            beginners and can be practiced anywhere, anytime. This exercise
            helps to regulate the nervous system and can be integrated into
            daily routines for consistent stress management.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 4 seconds
            </li>
            <li>
              <strong>Hold:</strong> 2 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 6 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Sit or lie down in a comfortable position.</td>
              <td>1. Reduces anxiety</td>
            </tr>
            <tr>
              <td>2. Inhale slowly through your nose for 4 seconds.</td>
              <td>2. Enhances focus</td>
            </tr>
            <tr>
              <td>3. Hold your breath gently for 2 seconds.</td>
              <td>3. Promotes a sense of calm</td>
            </tr>
            <tr>
              <td>4. Exhale slowly through your mouth for 6 seconds.</td>
            </tr>
            <tr>
              <td>5. Repeat for 5-10 minutes.</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}

          <h2 className="sub-heading">2. Calming Breath</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Reduces stress and promotes tranquility.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Calming Breath is designed to slow the
            heart rate and lower blood pressure by engaging the parasympathetic
            nervous system. This technique is effective for immediate stress
            relief and can be used during high-stress situations.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 4 seconds
            </li>
            <li>
              <strong>Hold:</strong> 4 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 8 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Find a quiet place to sit comfortably.</td>
              <td>1. Lowers blood pressure</td>
            </tr>
            <tr>
              <td>2. Inhale deeply through your nose for 4 seconds.</td>
              <td>2. Reduces cortisol levels</td>
            </tr>
            <tr>
              <td>3. Hold the breath for 4 seconds.</td>
              <td>3. Enhances emotional stability</td>
            </tr>
            <tr>
              <td>4. Exhale gently through your mouth for 8 seconds.</td>
            </tr>
            <tr>
              <td>5. Continue this cycle for 5-10 minutes.</td>
            </tr>
          </table>

          <h2 className="sub-heading">3. Deep Breath</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Fully oxygenates the body and clears the
            mind.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Deep breathing maximizes oxygen intake
            and promotes relaxation. It is beneficial for lung health and
            improving respiratory efficiency. Regular practice can enhance
            overall energy levels and mental clarity.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 6 seconds
            </li>
            <li>
              <strong>Hold:</strong> 6 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 6 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Sit upright or lie down comfortably.</td>
              <td>1. Improves lung capacity</td>
            </tr>
            <tr>
              <td>2. Inhale deeply through the nose for 6 seconds.</td>
              <td>2. Increases oxygen supply</td>
            </tr>
            <tr>
              <td>3. Hold the breath for 6 seconds.</td>
              <td>3. Reduces stress and anxiety</td>
            </tr>
            <tr>
              <td>4. Exhale slowly through the mouth for 6 seconds.</td>
            </tr>
            <tr>
              <td>5. Repeat for 5-10 minutes.</td>
            </tr>
          </table>

          <h2 className="sub-heading">4. Rejuvenating Breath</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Energizes the body and mind.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Rejuvenating Breath is perfect for a
            quick energy boost. It refreshes the mind and invigorates the body,
            making it ideal for use during mid-day slumps or when feeling
            fatigued.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 4 seconds
            </li>
            <li>
              <strong>Hold:</strong> 2 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 4 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Sit or stand comfortably.</td>
              <td>1. Boosts energy levels</td>
            </tr>
            <tr>
              <td>2. Inhale quickly through the nose for 4 seconds.</td>
              <td>2. Enhances focus and alertness</td>
            </tr>
            <tr>
              <td>3. Hold the breath for 2 seconds.</td>
              <td>3. Refreshes the mind</td>
            </tr>
            <tr>
              <td>4. Exhale forcefully through the mouth for 4 seconds.</td>
            </tr>
            <tr>
              <td>5. Perform for 3-5 minutes.</td>
            </tr>
          </table>

          <h2 className="sub-heading">5. Stress Relief</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Alleviates stress and promotes relaxation.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Stress Relief breathing is a powerful
            technique for reducing acute stress. It helps to calm the mind and
            body quickly and can be used in any stressful situation.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 4 seconds
            </li>
            <li>
              <strong>Hold:</strong> 4 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 8 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Sit comfortably and close your eyes.</td>
              <td>1. Reduces anxiety</td>
            </tr>
            <tr>
              <td>2. Inhale through your nose for 4 seconds.</td>
              <td>2. Calms the nervous system</td>
            </tr>
            <tr>
              <td>3. Hold the breath for 4 seconds.</td>
              <td>3. Improves emotional regulation</td>
            </tr>
            <tr>
              <td>4. Exhale slowly through your mouth for 8 seconds.</td>
            </tr>
            <tr>
              <td>5. Repeat for 5-10 minutes.</td>
            </tr>
          </table>

          <h2 className="sub-heading">6. Energy Boost</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Provides a quick burst of energy.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Energy Boost breathing is effective
            for invigorating the body and mind. It's perfect for starting the
            day or re-energizing after a long period of inactivity.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 3 seconds
            </li>
            <li>
              <strong>Hold:</strong> 1 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 3 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Stand or sit in a comfortable position.</td>
              <td>1. Increases alertness</td>
            </tr>
            <tr>
              <td>2. Inhale sharply through your nose for 3 seconds.</td>
              <td>2. Enhances physical performance</td>
            </tr>
            <tr>
              <td>3. Hold your breath for 1 seconds.</td>
              <td>3. Reduces fatigue</td>
            </tr>
            <tr>
              <td>4. Exhale quickly through your mouth for 3 seconds.</td>
            </tr>
            <tr>
              <td>5. Perform for 2-3 minutes.</td>
            </tr>
          </table>

          <h2 className="sub-heading">7. Soothing Sleep</h2>
          <p className="purpose">
            <strong>Purpose:</strong> Promotes restful sleep and relaxation.
          </p>
          <p className="paragraph">
            <strong>Description:</strong> Soothing Sleep breathing is designed
            to relax the body and mind, preparing you for a deep and restful
            sleep. This technique slows the heart rate and calms the nervous
            system.
          </p>
          <ul className="list">
            <h3 className="list-heading">Technique:</h3>
            <li>
              <strong>Breath In:</strong> 4 seconds
            </li>
            <li>
              <strong>Hold:</strong> 7 seconds
            </li>
            <li>
              <strong>Breath Out:</strong> 8 seconds
            </li>
          </ul>

          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Lie down in a comfortable position.</td>
              <td>1. Improves sleep quality</td>
            </tr>
            <tr>
              <td>2. Inhale slowly through your nose for 4 seconds..</td>
              <td>2. Reduces insomnia</td>
            </tr>
            <tr>
              <td>3. Hold your breath for 7 seconds.</td>
              <td>3. Promotes deep relaxation</td>
            </tr>
            <tr>
              <td>4. Exhale quickly through your mouth for 8 seconds.</td>
            </tr>
            <tr>
              <td>5. Repeat for 5-10 minutes before bedtime.</td>
            </tr>
          </table>

          <h2 className="sub-heading">
            Additional Suggested Breathing Exercises
          </h2>
          <table className="fact-table">
            <tr>
              <th>Alternate Nostril Breathing (Nadi Shodhana):</th>
              <th>4-7-8 Breathing:</th>
            </tr>
            <tr>
              <td>Inhale: 4 seconds through one nostril</td>
              <td>Inhale: 4 seconds</td>
            </tr>
            <tr>
              <td>Hold: 4 seconds</td>
              <td>Hold: 7 seconds</td>
            </tr>
            <tr>
              <td>Exhale: 4 seconds through the other nostril</td>
              <td>Exhale: 8 seconds</td>
            </tr>
            <tr>
              <td>
                Benefits: Balances the mind, reduces stress, improves
                respiratory function
              </td>
              <td>
                Benefits: Induces relaxation, reduces anxiety, aids in sleep
              </td>
            </tr>
          </table>
        </main>
      </section>

      {/* FOOTER DESIGN */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © 2024 | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#breathing-page">
            <i className="fa-solid fa-angle-up" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Breathing;
