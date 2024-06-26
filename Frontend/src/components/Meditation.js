import React from "react";
const Meditation = () => {
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
          <a href="meditation-page" className="active">
            Meditation
          </a>
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
      <section className="meditation-page" id="meditation-page">
        <h2 className="heading">
          Introduction about <span>Meditation</span>
        </h2>
        <h3 className="sub-heading">
          Welcome to Comprehensive Guide to Meditation.
        </h3>
        <p className="paragraph">
          Meditation is a transformative practice that can enhance mental
          clarity, emotional balance, and overall well-being. Below is a
          detailed guide to seven types of meditation, providing in-depth
          information about meditation and it's types.
        </p>

        <main className="meditation-page" id="meditation-page-content">
          <h2 className="sub-heading">1. Mindfulness Meditation</h2>
          <p className="paragraph">
            <strong>Overview:</strong> Mindfulness Meditation focuses on
            cultivating awareness and acceptance of the present moment.
            Practitioners observe their thoughts, emotions, and sensations
            without judgment.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>
                1. Find a quiet space: Sit comfortably with your back straight.
              </td>
              <td>Beginner: Start with 5-10 minutes daily.</td>
              <td>1. Reduces stress and anxiety</td>
            </tr>
            <tr>
              <td>
                2. Focus on your breath: Pay attention to the sensation of
                breathing.
              </td>
              <td>
                Intermediate/Advanced: Gradually increase to 20-30 minutes
                daily.
              </td>
              <td>2. Enhances emotional regulation</td>
            </tr>
            <tr>
              <td>
                3. Observe thoughts: Notice thoughts as they arise and let them
                pass without judgment.
              </td>
              <td></td>
              <td>3. Improves focus and concentration</td>
            </tr>
            <tr>
              <td>
                4. Return to breath: Gently bring your focus back to your breath
                whenever your mind wanders.
              </td>
              <td></td>
              <td>4. Promotes overall well-being</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
          <h2 className="sub-heading">2. Guided Meditation</h2>
          <p className="paragraph">
            <strong>Overview:</strong> Guided Meditation involves listening to a
            guide who leads you through a meditation practice, which can include
            visualizations, body scans, or breathing exercises.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>
                1. Choose a guide: Select a guided meditation track or app.
              </td>
              <td>Beginner: Start with 5-10 minutes daily.</td>
              <td>1. Helps beginners start meditating</td>
            </tr>
            <tr>
              <td>
                2. Find a comfortable position: Sit or lie down in a quiet
                place.
              </td>
              <td>
                Intermediate/Advanced: Gradually increase to 20-45 minutes
                daily.
              </td>
              <td>2. Provides structure and guidance</td>
            </tr>
            <tr>
              <td>
                3. Follow the instructions: Listen and follow the guide's
                directions, fully engaging with the process.
              </td>
              <td></td>
              <td>3. Enhances relaxation and stress relief</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>4. Supports specific goals (e.g., healing, sleep)</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
          <h2 className="sub-heading">3. Focused Meditation</h2>
          <p className="paragraph">
            <strong>Overview:</strong> Focused Meditation involves concentrating
            on a single point of focus, such as a word, sound, object, or
            breath, to enhance concentration and mental clarity.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>
                1. Choose a focal point: Select an object, sound, or mantra.
              </td>
              <td>Beginner: Start with 5-10 minutes daily.</td>
              <td>1. Improves concentration and attention span</td>
            </tr>
            <tr>
              <td>
                2. Find a comfortable position: Sit comfortably with your back
                straight.
              </td>
              <td>
                Intermediate/Advanced: Gradually increase to 15-30 minutes
                daily.
              </td>
              <td>2. Enhances mental clarity</td>
            </tr>
            <tr>
              <td>
                3. Focus attention: Direct your attention to your chosen focal
                point.
              </td>
              <td></td>
              <td>3. Reduces stress and anxiety</td>
            </tr>
            <tr>
              <td>
                4. Maintain focus: Gently bring your mind back to the focal
                point whenever it wanders.
              </td>
              <td></td>
              <td>4. Promotes deep relaxation</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
          <h2 className="sub-heading">4. Visualization Meditation</h2>
          <p className="paragraph">
            <strong>Overview:</strong> Visualization Meditation involves
            imagining a peaceful scene or positive outcome to promote relaxation
            and mental clarity.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>1. Find a quiet space: Sit or lie down comfortably.</td>
              <td>Beginner: Start with 5-10 minutes daily.</td>
              <td>1. Reduces stress and anxiety</td>
            </tr>
            <tr>
              <td>
                2. Choose a scene: Imagine a peaceful place or desired outcome.
              </td>
              <td>
                Intermediate/Advanced: Gradually increase to 20-30 minutes
                daily.
              </td>
              <td>2. Enhances relaxation and tranquility</td>
            </tr>
            <tr>
              <td>
                3. Engage the senses: Visualize the scene in detail, using all
                your senses.
              </td>
              <td></td>
              <td>3. Boosts creativity and problem-solving</td>
            </tr>
            <tr>
              <td>
                4. Maintain the image: Hold the image in your mind, returning to
                it whenever your focus drifts.
              </td>
              <td></td>
              <td>4. Supports goal achievement and motivation</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
          <h2 className="sub-heading">5. Loving-Kindness Meditation (Metta)</h2>
          <p className="paragraph">
            <strong>Overview:</strong>Loving-Kindness Meditation focuses on
            cultivating feelings of compassion, love, and goodwill towards
            oneself and others.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>
                1. Find a comfortable position: Sit comfortably with your back
                straight.
              </td>
              <td>Beginner: Start with 5-10 minutes daily.</td>
              <td>1. Increases compassion and empathy</td>
            </tr>
            <tr>
              <td>
                2. Focus on yourself: Silently repeat phrases like “May I be
                happy, may I be healthy.”
              </td>
              <td>
                Intermediate/Advanced: Gradually increase to 20-30 minutes
                daily.
              </td>
              <td>2. Enhances emotional resilience</td>
            </tr>
            <tr>
              <td>
                3. Extend to others: Gradually extend these wishes to loved
                ones, acquaintances, and even those you find challenging.
              </td>
              <td></td>
              <td>3. Reduces stress and negative emotions</td>
            </tr>
            <tr>
              <td>
                4. Maintain the feeling: Cultivate the feelings of
                loving-kindness as you repeat the phrases.
              </td>
              <td></td>
              <td>4. Promotes positive social connections</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
          <h2 className="sub-heading">6. Transcendental Meditation</h2>
          <p className="paragraph">
            <strong>Overview:</strong>Transcendental Meditation (TM) involves
            silently repeating a mantra for 15-20 minutes twice a day to achieve
            a state of restful alertness.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>
                1. Learn the technique: TM is typically taught by certified
                instructors.
              </td>
              <td>Beginner: 20 minutes twice daily.</td>
              <td>1. Reduces stress and anxiety</td>
            </tr>
            <tr>
              <td>2. Find a quiet space: Sit comfortably with eyes closed.</td>
              <td>Intermediate/Advanced: Consistently practice twice daily.</td>
              <td>2. Enhances cognitive function</td>
            </tr>
            <tr>
              <td>
                3. Repeat the mantra: Silently repeat the mantra assigned by the
                instructor.
              </td>
              <td></td>
              <td>3. Promotes overall well-being</td>
            </tr>
            <tr>
              <td>
                4. Allow thoughts to flow: Let thoughts come and go without
                attachment, gently returning to the mantra
              </td>
              <td></td>
              <td>4. Improves sleep quality</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
          <h2 className="sub-heading">7. Body Scan Meditation</h2>
          <p className="paragraph">
            <strong>Overview:</strong> Body Scan Meditation involves paying
            attention to various parts of the body in a gradual sequence,
            promoting relaxation and awareness of bodily sensations.
          </p>
          <table className="fact-table no-border">
            <tr>
              <th>Instructions</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
            <tr>
              <td>
                1. Lie down comfortably: Find a quiet space and lie down on your
                back.
              </td>
              <td>Beginner: 10-15 minutes per session.</td>
              <td>1. Reduces stress and tension</td>
            </tr>
            <tr>
              <td>2. Focus on the breath: Take a few deep breaths to relax.</td>
              <td>Intermediate/Advanced: 20-45 minutes per session.</td>
              <td>2. Enhances body awareness</td>
            </tr>
            <tr>
              <td>
                3. Scan the body: Gradually bring your attention to each part of
                your body, starting from the toes and moving up to the head.
              </td>
              <td></td>
              <td>3. Promotes relaxation and well-being</td>
            </tr>
            <tr>
              <td>
                4. Observe sensations: Notice any sensations, tension, or
                relaxation in each area without judgment.
              </td>
              <td></td>
              <td>4. Supports pain management</td>
            </tr>
          </table>
          {/* <a href="#diet-planner-page" class="btn">
                Read More
              </a> */}
        </main>
      </section>

      {/* FOOTER DESIGN */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © 2024 | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#meditation-page">
            <i className="fa-solid fa-angle-up" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Meditation;
