import "./App.css";
import logo from "../src/assets/logo.svg";
import personImage from "../src/assets/image 227.png";
import tick from "../src/assets/tick.svg";
import Mapper from "../src/Mapper.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greet />
      {/* <Greet_Mobile /> */}
      <Auth />
      <Mapper />
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
        <div style={{fontSize:"90px"}} >Faster</div>
        <div style={{fontSize:"80px"}} >More</div>
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
