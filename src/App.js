import "./App.css";
import logo from "../src/assets/logo.svg";
import personImage from "../src/assets/image 227.png";
import tick from "../src/assets/tick.svg";
import Mapper from "./pages/Mapper.js";
import mapperImage from "../src/assets/Group 48108118.png";
import courselImage from "../src/assets/Group 48109136.png";
import roundArrow from "../src/assets/Group 48109151.png";
import uiImage from "../src/assets/Group 48109445.png";
import uiCourselImage from "../src/assets/Group 48109412.png";
import Testimonials from "./pages/Testimonials.js";
import Footer from "./pages/Footer.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Greet />
      {/* <Greet_Mobile /> */}
      <Auth />
      <Mapper
        introImage={mapperImage}
        courselImage={courselImage}
        roundArrow={roundArrow}
        colorCode={"#8cd6ff"}
        title={"Mapper"}
        subtitle={"Explore the collaborative persona mapper"}
        list={[
          "Create up to 10 personas in a single view",
          "Enrich personas with our Attributes Library",
          "Solicit quick feedback",
          "Leverage AI ",
          "Assign action items",
          "Generate persona similarity and attribute analysis",
        ]}
        message ={"Create rich persona attributes and images using generative AI."}
        accentColor = {"#0095E9"}
        shadowColor = {"#71C8F8"}
      />
      <Mapper
        introImage={uiImage}
        courselImage={uiCourselImage}
        roundArrow={roundArrow}
        colorCode={"#FEC2B6"}
        title = {"UI Reviews"}
        subtitle = {"Conduct UI Reviews collaboratively in no time."}
        list={[
          "Upload screens or screenshots.",
          "Click anywhere to add an issue and its severity.",
          "Add reasons and recommendations to fix the issues.",
          "Assign issues to individuals or teams.",
          "Create and share UI Review reports.",
          "Assign issues to individuals or teams."
        ]}
        message = {"Make each issue actionable by adding a severity to it."}
        accentColor = {"#FA5F3D"}
        shadowColor = {"#E9796233"}
      />
      <Testimonials />
      <Footer />
    </div>
  );
}

//NavBar: Start
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <Menu />
      <Auth_link />
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <div>Mapper</div>
      <div>Tapper</div>
      <div>Resources</div>
      <div>Blog</div>
    </div>
  );
}

function Auth_link() {
  return (
    <div className="auth-link">
      <div>Sign In</div>
      <div className="active">Sign Up</div>
    </div>
  );
}
//NavBar: End

//Greet: Start
function Greet() {
  return (
    <div className="greet">
      <div className="message">
        <div>Better, Faster</div>
        <div className="greet-row-two">
          <div>More Acti</div>
          <div className="person-image">
            <img src={personImage} />
          </div>
          <div>nable UX.</div>
        </div>
      </div>
      <div className="start-button">Get Started</div>
    </div>
  );
}
//Greet: End

//Greet-mobile: Start
function Greet_Mobile() {
  return (
    <div className="greet-mobile">
      <div className="greet-message">
        <div>Better,</div>
        <div style={{ fontSize: "90px" }}>Faster</div>
        <div style={{ fontSize: "80px" }}>More</div>
        <div className="greet-row-two">
          <div>Acti</div>
          <div className="person-image">
            <img src={personImage} />
          </div>
          <div>nable UX.</div>
        </div>
      </div>
      <div>
        <div className="start-button">Get Started</div>
      </div>
    </div>
  );
}
//Greet-mobile: End

//Auth: Start
function Auth() {
  return (
    <div className="auth">
      <Info />
      <Auth_Form />
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      Benefits
      <div className="list-item">
        <img src={tick} />2 Persona Mappers
      </div>
      <div className="list-item">
        <img src={tick} />2 UI Reviews
      </div>
      <div className="list-item">
        <img src={tick} />3 collaborators per project
      </div>
      <div className="list-item">
        <img src={tick} />
        Unlimited viewers (with public url)
      </div>
      <div className="list-item">
        <img src={tick} />
        Storage forever
      </div>
    </div>
  );
}

function Auth_Form() {
  return (
    <div className="auth-form">
      Sign up
      <div className="name">
        <div className="text-field">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="text-field">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>
      <div className="credentials">
        <div className="text-field">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="text-field">
          <label>Password</label>
          <input type="password" />
        </div>
      </div>
    </div>
  );
}
//Auth: End

export default App;
