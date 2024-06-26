import React from "react";

const Diet = () => {
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
          <a href="diet-planner-page" className="active">
            Diet Planner
          </a>
          <a href="meditation-page">Meditation</a>
          <a href="breathing-page">Breathing</a>
          <a href="#login">Login</a>
          {/* <div className="login">
            <a href="#home" id="dark-mode-toggle">
              <i className="fa-solid fa-user" />
            </a>
          </div> */}
        </nav>
      </header>

      {/* Main content in calories page */}
      <section className="diet-planner-page" id="diet-planner-page">
        <h2 className="heading">
          About <span>Diet Planner</span>
        </h2>
        <h3 className="sub-heading">
          Welcome to Your Personalized Diet Journey
        </h3>
        <p className="paragraph">
          At My Diet Planner, we believe in empowering you to achieve your
          health and wellness goals through tailored nutrition plans. Whether
          you're aiming for weight loss, muscle gain, or maintaining a balanced
          diet, our expert-designed plans ensure you receive the most accurate
          and beneficial guidance. Here's everything you need to know to embark
          on your journey to better health.
        </p>

        <main className="diet-planner" id="diet-planner-content">
          <h2 className="sub-heading">Understanding Your Nutritional Needs</h2>
          <h2 className="sub-heading title">Calories</h2>
          <p className="paragraph">
            Calories are the measure of energy that your body derives from the
            food and beverages you consume. Understanding your daily caloric
            needs is the first step in any dietary plan.
          </p>
          <div class="diet-planner-page-container">
            <div class="diet-planner-page-box">
              <h3>
                Daily Requirements <i class="fa-solid fa-table-list"></i>
              </h3>
              <p>
                Caloric needs vary widely based on age, gender, and activity
                level. For example, women generally require 1,800-2,400 calories
                per day, while men need 2,200-3,000 calories per day. These
                values can change based on individual metabolic rates and
                physical activity levels.
              </p>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>

            <div class="diet-planner-page-box">
              <h3>
                Energy Balance <i class="fa-solid fa-bolt"></i>
              </h3>
              <p>
                To maintain weight, balance the calories consumed with those
                burned. For weight loss, create a caloric deficit by consuming
                fewer calories than your body uses. For weight gain, consume
                more calories than your body burns.
              </p>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>
          </div>

          <h2 className="sub-heading">
            Macronutrients: The Building Blocks of Your Diet
          </h2>
          <p className="paragraph">
            Proteins are essential for the growth, repair, and maintenance of
            body tissues. They are made up of amino acids, which are the
            building blocks of muscles, skin, enzymes, and hormones.
          </p>
          <div class="diet-planner-page-container-2">
            <div class="diet-planner-page-box-2">
              <h3>Proteins</h3>
              <p>
                Proteins are essential for the growth and repair of tissues, the
                production of enzymes and hormones, and overall cellular
                function.
              </p>
              <ul className="list">
                <li>
                  <strong>Sources:</strong> Include lean meats, poultry, fish,
                  eggs, dairy products, legumes, nuts, and seeds.
                </li>
                <li>
                  <strong>Daily Intake: </strong> Proteins should constitute
                  10-35% of your total daily calorie intake. This typically
                  translates to 50-175 grams per day, depending on your caloric
                  intake.
                </li>
                <li>
                  <strong>Benefits:</strong> A high-protein diet can help
                  preserve muscle mass during weight loss and support muscle
                  growth during weight gain.
                </li>
              </ul>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>

            <div class="diet-planner-page-box-2">
              <h3>Carbohydrates</h3>
              <p>
                Carbohydrates are the body's primary energy source, crucial for
                brain function and physical activity.
              </p>
              <ul className="list">
                <li>
                  <strong>Sources: </strong> Focus on whole grains, fruits,
                  vegetables, and legumes for complex carbohydrates, and limit
                  simple sugars found in sweets and sodas.
                </li>
                <li>
                  <strong>Daily Intake:</strong>Carbohydrates should make up
                  45-65% of your total daily calories. This equates to about
                  225-325 grams per day for a 2,000-calorie diet.
                </li>
                <li>
                  <strong>Benefits:</strong> Complex carbohydrates provide
                  sustained energy and are rich in fiber, aiding digestion and
                  stabilizing blood sugar levels.
                </li>
              </ul>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>

            <div class="diet-planner-page-box-2">
              <h3>Fats</h3>
              <p>
                Fats are vital for energy, supporting cell growth, protecting
                organs, and aiding in nutrient absorption.
              </p>
              <ul className="list">
                <li>
                  <strong>Sources: </strong> Opt for unsaturated fats found in
                  olive oil, nuts, seeds, and avocados. Limit saturated fats
                  from animal products and avoid trans fats found in processed
                  foods
                </li>
                <li>
                  <strong>Daily Intake:</strong> Fats should account for 20-35%
                  of your total daily calories. This is approximately 44-78
                  grams per day for a 2,000-calorie diet.
                </li>
                <li>
                  <strong>Benefits:</strong> Healthy fats support brain
                  function, hormone production, and help reduce inflammation.
                </li>
              </ul>
              {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
            </div>
          </div>

          <h2 className="sub-heading">Fiber</h2>
          <p className="paragraph">
            Dietary fiber is crucial for digestive health, helping to regulate
            blood sugar levels and lower cholesterol.
          </p>
          <ul className="list">
            <li>
              <strong>Sources: </strong> Include whole grains, fruits,
              vegetables, legumes, and nuts.
            </li>
            <li>
              <strong>Daily Intake:</strong>Aim for 25-30 grams of fiber per
              day.
            </li>
            <li>
              <strong>Benefits:</strong> Fiber promotes regular bowel movements,
              aids in weight management, and reduces the risk of chronic
              diseases like heart disease and diabetes.
            </li>
          </ul>

          <h2 className="sub-heading">
            Hydration <i class="fa-solid fa-droplet"></i>
          </h2>
          <p className="paragraph">
            Proper hydration is vital for overall health. Water is necessary for
            digestion, nutrient absorption, and the regulation of body
            temperature.
          </p>
          <ul className="list">
            <li>
              <strong>Daily Intake:</strong> Aim for at least 8-10 cups of water
              per day. This can vary based on individual needs, climate, and
              physical activity levels.
            </li>
            <li>
              <strong>Sources: </strong> Besides drinking water, hydration can
              also come from fruits, vegetables, and other beverages like herbal
              teas.
            </li>
          </ul>

          <h2 className="sub-heading">Sample Meal Plan</h2>
          <table className="fact-table">
            <tr>
              <th colSpan={6}>Week 1: Balanced Nutrition</th>
            </tr>

            <tr>
              <th></th>
              <th className="head-row">Breakfast</th>
              <th className="head-row">Lunch</th>
              <th className="head-row">Snack</th>
              <th className="head-row">Dinner</th>
              <th className="head-row">Snack</th>
            </tr>
            <tr>
              <th>Day 1</th>
              <td>
                <ul className="list">
                  <li>Idli with coconut chutney and sambar</li>
                  <li>A glass of buttermilk</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Roti with palak paneer</li>
                  <li>Brown rice</li>
                  <li>Cucumber raita</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Masala roasted peanuts</li>
                  <li>Almonds</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Grilled fish tikka</li>
                  <li>Quinoa pulao</li>
                  <li>Mixed vegetable salad with lemon dressing</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Papaya slices</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Day 2</th>
              <td>
                <ul className="list">
                  <li>Poha with peanuts and curry leaves</li>
                  <li>A glass of mango lassi</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Rajma (kidney bean curry)</li>
                  <li>Brown rice</li>
                  <li>Carrot and beetroot salad</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Sprouted moong chaat</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Chicken curry</li>
                  <li>Whole wheat paratha</li>
                  <li>Steamed broccoli</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Handful of mixed nuts</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Day 3</th>
              <td>
                <ul className="list">
                  <li>Masala omelette</li>
                  <li>Whole grain toast</li>
                  <li>A glass of orange juice</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Chole (chickpea curry)</li>
                  <li>Jeera rice (cumin rice)</li>
                  <li>Onion and cucumber salad</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Greek yogurt with honey and almonds</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Baked tandoori chicken</li>
                  <li>Quinoa salad with pomegranate and mint</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Apple slices with almond butter</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Day 4</th>
              <td>
                <ul className="list">
                  <li>Upma with mixed vegetables</li>
                  <li>A glass of masala chai</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Paneer tikka</li>
                  <li>Roti</li>
                  <li>Mixed vegetable sabzi</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Fresh fruit salad</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Fish curry</li>
                  <li>Brown rice</li>
                  <li>Steamed green beans</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Dates and walnuts</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Day 5</th>
              <td>
                <ul className="list">
                  <li>Whole wheat paratha with yogurt</li>
                  <li>A glass of freshly squeezed orange juice</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Dal tadka (lentil curry)</li>
                  <li>Spinach roti</li>
                  <li>Cabbage and carrot stir-fry</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Coconut water and roasted chana</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Lemon rice</li>
                  <li>Grilled prawns</li>
                  <li>Tomato and cucumber salad</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Handful of raisins</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Day 6</th>
              <td>
                <ul className="list">
                  <li>Dosa with tomato chutney and sambar</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Mutton curry</li>
                  <li>Whole wheat naan</li>
                  <li>Mixed greens salad</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Roasted makhana (fox nuts)</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Vegetable biryani</li>
                  <li>Raita</li>
                  <li>Green salad with lemon dressing</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Sliced mango</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Day 7</th>
              <td>
                <ul className="list">
                  <li>Besan chilla (gram flour pancake) with mint chutney</li>
                  <li>A glass of pomegranate juice</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Bhindi masala (okra curry)</li>
                  <li>Roti</li>
                  <li>Moong dal tadka</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Carrot sticks with hummus</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Grilled chicken skewers</li>
                  <li>Millet khichdi</li>
                  <li>Mixed vegetable salad</li>
                </ul>
              </td>
              <td>
                <ul className="list">
                  <li>Fresh figs</li>
                </ul>
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
          <a href="#diet-planner-page">
            <i className="fa-solid fa-angle-up" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Diet;
