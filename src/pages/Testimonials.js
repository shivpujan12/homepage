import clientImage from "../assets/client-image.png";
import "../stylesheets/testimonials.css";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import momentumLogo from "../assets/momentumLogo.png";
export default function Testimonials() {

  return (
    <div className="testimonials">
      <TestiCard />
    </div>
  );
}

function TestiCard(){
  return(
    <div className="main">
        <div className="profile">
          <div className="client-image">
            <img src={clientImage} />
          </div>
          <div className="arrow-keys">
            <img src={arrowLeft} style={{marginRight:"5%"}} onClick={()=>console.log('clicked')} />
            <img src={arrowRight} style={{borderRadius: "50%",boxShadow: "0 20px 10px 3px #41414108"}} />
          </div>
        </div>
        <div className="description">
          <div className="message">
            I really love the UI Review & Persona Mapper, especially their
            analytical capabilities. Also, the design is super nice and they are
            very easy to use. Thank you!
          </div>
          <div className="details">
            - Monika Farnbach
            <div className="position">
            Senior Design Researcher @ Momentum Energy
            <img src={momentumLogo} />
            </div>
          </div>
        </div>
      </div>
  )
}
