import React from "react";
const Calories = () => {
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
          <a href="calories-counter-page" className="active">
            Calories Counter
          </a>
          <a href="diet-planner-page">Diet Planner</a>
          <a href="meditation-page">Meditation</a>
          <a href="breathing-page">Breathing</a>
          <a href="#login">Login</a>
          {/* <div className="login">
            <a href="#home">
              <i className="fa-solid fa-user" />
            </a>
          </div> */}
        </nav>
      </header>

      {/* Main content in calories page */}
      <section className="calories-counter" id="calories-counter">
        <h2 className="heading">
          Introduction about <span>Calories</span>
        </h2>
        <h3 className="sub-heading">Welcome to the Calories Counter page.</h3>
        <p className="paragraph">
          Understanding the nutritional content of your food is essential for
          maintaining a healthy lifestyle. This guide provides comprehensive
          information on calories, proteins, carbohydrates, fats, and other
          crucial nutrients. It is designed to help users of all ages make
          informed dietary choices based on the best standards in the world.
        </p>

        <main className="calories" id="calories-counter-content">
          <div class="calories-counter-container">
            <div class="calories-counter-box">
              <h2 className="sub-heading">Calories</h2>
              <p className="paragraph">
                Calories are units of energy that fuel our bodies. They are
                found in all foods and drinks except water. The amount of energy
                provided by food is measured in kilocalories (kcal) or simply
                calories. The average daily caloric intake varies based on age,
                gender, and activity level:
              </p>
              <ul className="list">
                <li>
                  <strong>Men:</strong> <u>2,500</u> calories/day
                </li>
                <li>
                  <strong>Women:</strong> 2,000 calories/day
                </li>
                <li>
                  <strong>Children:</strong> 1,200-1,800 calories/day, depending
                  on age and activity level
                </li>
              </ul>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>

            <div class="calories-counter-box">
              <h2 className="sub-heading">Protein</h2>
              <p className="paragraph">
                Proteins are essential for the growth, repair, and maintenance
                of body tissues. They are made up of amino acids, which are the
                building blocks of muscles, skin, enzymes, and hormones.
              </p>
              <ul className="list">
                <li>
                  <strong>Daily Requirement:</strong> 10-35% of total calories
                </li>
                <li>
                  <strong>Sources: </strong> Dairy products, legumes, nuts,
                  seeds, Meat, fish, and eggs
                </li>
                <li>
                  <strong>Benefits:</strong> Supports muscle growth, immune
                  function, and overall health
                </li>
              </ul>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>
            <div class="calories-counter-box">
              <h2 className="sub-heading">Carbohydrates</h2>
              <p className="paragraph">
                Carbohydrates are the body's main source of energy. They are
                classified into simple (sugars) and complex (starches and
                fibers) carbohydrates.
              </p>
              <ul className="list">
                <li>
                  <strong>Daily Requirement:</strong> 45-65% of total calories
                </li>
                <li>
                  <strong>Sources: </strong> Fruits, vegetables, grains,
                  legumes, and dairy products
                </li>
                <li>
                  <strong>Benefits:</strong> Provides energy, supports brain
                  function, and aids in digestion through dietary fiber
                </li>
              </ul>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>
            <div className="calories-counter-box">
              <h2 className="sub-heading">Fats</h2>
              <p className="paragraph">
                Fats are a concentrated source of energy and are vital for
                various bodily functions. They are divided into saturated,
                unsaturated, and trans fats.
              </p>
              <ul className="list">
                <li>
                  <strong>Daily Requirement:</strong> 20-35% of total calories
                </li>
                <li>
                  <strong>Sources: </strong> Oils, butter, avocados, nuts,
                  seeds, and fatty fish
                </li>
                <li>
                  <strong>Benefits:</strong> Supports cell growth, protects
                  organs, and aids in nutrient absorption
                </li>
              </ul>

              <div class="calories-counter-box">
                <h2 className="sub-heading">Saturated Fats</h2>
                <p>
                  Saturated fats are typically solid at room temperature. High
                  intake of these fats can increase the risk of heart disease.
                </p>
                <ul className=" list">
                  <li>
                    <strong>Sources:</strong> Meat, butter, cheese, and coconut
                    oil
                  </li>
                  <li>
                    <strong>Recommendation:</strong> Limit to less than 10% of
                    daily calories
                  </li>
                </ul>
              </div>

              <div class="calories-counter-box">
                <h2 className="sub-heading">Unsaturated Fats</h2>
                <p>
                  Unsaturated fats are usually liquid at room temperature and
                  are considered heart-healthy.
                </p>
                <ul className=" list">
                  <li>
                    <strong>Sources:</strong> Olive oil, avocado, nuts, and fish
                  </li>
                  <li>
                    <strong>Benefits:</strong> Reduces the risk of heart disease
                    and inflammation
                  </li>
                </ul>
              </div>
              <div class="calories-counter-box">
                <h2 className="sub-heading">Trans Fats</h2>
                <p>
                  Trans fats are artificially produced and are harmful to
                  health.
                </p>
                <ul className=" list">
                  <li>
                    <strong>Sources:</strong> Processed foods, margarine, and
                    fried foods
                  </li>
                  <li>
                    <strong>Recommendation:</strong> Avoid as much as possible
                  </li>
                </ul>
              </div>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
                </a> */}
            </div>
          </div>

          <h2 className="sub-heading">Important Nutrients and Concepts</h2>
          <ul className="list">
            <h2 className="list-heading">Vitamins and Minerals</h2>
            <p>
              Vitamins and minerals are essential for various bodily functions,
              including immunity, bone health, and wound healing.
            </p>
            <ul className="sub-list">
              <li>
                <strong>Vitamins:</strong> A, C, D, E, K, and B-complex
              </li>
              <li>
                <strong>Minerals: </strong> Calcium, potassium, iron, magnesium,
                and zinc
              </li>
            </ul>

            <h2 className="list-heading">Dietary Fiber</h2>
            <p>
              Dietary fiber is crucial for digestive health. It helps prevent
              constipation, lowers cholesterol levels, and controls blood sugar
              levels.
            </p>
            <ul className="sub-list">
              <li>
                <strong>Sources:</strong> Whole grains, fruits, vegetables, and
                legumes
              </li>
              <li>
                <strong>Daily Requirement: </strong> 25-30 grams
              </li>
            </ul>
          </ul>

          <h2 className="sub-heading">Tips for a Balanced Diet</h2>
          <ol className="list">
            <li>
              <strong>Variety:</strong> Include a wide range of foods to ensure
              you get all necessary nutrients.
            </li>
            <li>
              <strong>Portion:</strong> Be mindful of portion sizes to avoid
              overeating.
            </li>
            <li>
              <strong>Hydration:</strong> Drink plenty of water throughout the
              day.
            </li>
            <li>
              <strong>Limit Processed Foods: </strong> Minimize intake of foods
              high in sugar, salt, and unhealthy fats.
            </li>
            <li>
              <strong>Regular Meals:</strong> Have regular meals and snacks to
              maintain energy levels.
            </li>
          </ol>

          <h2 className="sub-heading">Quick Points</h2>
          <ol className="list">
            <li>
              <strong>Calories:</strong> Measure of energy from food; average
              needs vary by age, gender, and activity level.
            </li>
            <li>
              <strong>Proteins:</strong> Essential for tissue repair and growth;
              found in meat, dairy, legumes.
            </li>
            <li>
              <strong>Carbohydrates:</strong>Primary energy source; found in
              fruits, vegetables, grains.
            </li>
            <li>
              <strong>Fats: </strong> Needed for energy and cell function; focus
              on unsaturated fats, limit saturated and trans fats.
            </li>
            <li>
              <strong>Vitamins and Minerals:</strong> Crucial for overall
              health; found in a variety of foods.
            </li>
            <li>
              <strong>Dietary Fiber:</strong> Important for digestive health;
              found in whole grains, fruits, and vegetables.
            </li>
          </ol>

          <h2 className="sub-heading">Interesting Facts</h2>
          <table className="fact-table">
            <tr>
              <th>Nutrient</th>
              <th>Daily Requirement</th>
              <th>Primary Sources</th>
              <th>Key Benefits</th>
            </tr>
            <tr>
              <th>Calories</th>
              <td>1,200-2,500 kcal</td>
              <td>All foods and drinks</td>
              <td>Provides energy</td>
            </tr>
            <tr>
              <th>Protein</th>
              <td>10-35% of total calories</td>
              <td>Meat, fish, eggs, legumes </td>
              <td>Muscle growth, immune function, tissue repair</td>
            </tr>
            <tr>
              <th>Carbs</th>
              <td>45-65% of total calories</td>
              <td>Fruits, vegetables, grains</td>
              <td>Energy source, brain function, digestive health</td>
            </tr>
            <tr>
              <th>Fats</th>
              <td>20-35% of total calories</td>
              <td>Oils, nuts, seeds, fish</td>
              <td>Cell growth, protects organs, nutrient absorption</td>
            </tr>
            <tr>
              <th>Fiber</th>
              <td>25-30 grams</td>
              <td>Whole grains, fruits</td>
              <td>Digestive health, lowers cholesterol</td>
            </tr>
            <tr>
              <th>Vitamins </th>
              <td>Varies</td>
              <td>Fruits, vegetables, dairy</td>
              <td>Immunity, bone health, wound healing</td>
            </tr>
            <tr>
              <th>Minerals </th>
              <td>Varies</td>
              <td>Leafy greens, nuts, fish</td>
              <td>Bone health, muscle function, oxygen transport</td>
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
          <a href="#calories-counter">
            <i className="fa-solid fa-angle-up" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Calories;
