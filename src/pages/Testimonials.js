import clientImage from "../assets/client-image.png";
import "../stylesheets/testimonials.css";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import momentumLogo from "../assets/momentumLogo.png";
import person from "../assets/image 227.png";
import buildLogo from "../assets/logo.svg";
import { useEffect, useRef, useState } from "react";
export default function Testimonials() {
  const testiRef = useRef(null);

  // const [scrolled,setScrolled] = useState(0);
  // const [pageWidth,setPageWidth]= useState(370);

  // useEffect(()=>{
  //   setPageWidth(testiRef.current.pageWidth);
  //   setScrolled(testiRef.current.scrollLeft);
  //   testiRef.current.scrollLeft += 370;
  // })

  const [active, setActive] = useState(0);

  function leftNav() {
    console.log("left-nav");
    // testiRef.current.scrollLeft -= 100;
    if (active > 0) setActive(active - 1);
  }

  function rightNav() {
    console.log("right-nav");
    if (active < data.length - 1) setActive(active + 1);
    // if(scrolled<=370) return;
    // else{
    //   testiRef.current.scrollLeft -= 100;
    // }
  }

  const data = [
    {
      clientName: "Monika Farnbach",
      message:
        "I really love the UI Review & Persona Mapper, especially their analytical capabilities. Also, the design is super nice and they are very easy to use. Thank you!",
      companyLogo: momentumLogo,
      clientImage: clientImage,
    },
    {
      clientName: "Shivpujan yadav",
      message: "fuasfj anjfnasdkjfnaksjdnf,I lkasndlks nflkasdnflksdnsdfsdfs dfasf sdfasffhe desig fskjfsnd fjsndfjnskjnf jas nkdjfnjn is super nice and they alksanf asnfkjnas Thank you!",
      companyLogo: momentumLogo,
      clientImage: clientImage,
    },
    {
      clientName: "Dewansh singh",
      message: "Ikjna sdfjnas dkfjnasdia lly their analyt icala sdfkalds nfkjdsnfkja sdnfkjsadnf fasd fasdf dfsd fcapabiliti es. anfasndf jknda skhey are very easy to use. Thank you!",
      companyLogo: momentumLogo,
      clientImage: clientImage,
    },
  ];

  return (
    <div className="testimonials" ref={testiRef}>
      {data.map((d, i) => {
        if (i === active) {
          return (
            <TestiCard
              key={i}
              clientName={d.clientName}
              leftNav={leftNav}
              rightNav={rightNav}
              clientImage={d.clientImage}
              message={d.message}
              position={"Senior Design Researcher @ Momentum Energy"}
              companyLogo={d.companyLogo}
            />
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}

function TestiCard(props) {
  return (
    <div className="card">
      <div className="main">
        <div className="profile">
          <div className="client-image">
            <img src={props.clientImage} alt="client" />
          </div>
          <div className="arrow-keys">
            <img
              src={arrowLeft}
              style={{ marginRight: "5%" }}
              onClick={props.leftNav}
              alt="left"
            />
            <img
              src={arrowRight}
              style={{
                borderRadius: "50%",
                boxShadow: "0 20px 10px 3px #41414108",
              }}
              onClick={props.rightNav}
              alt="right"
            />
          </div>
        </div>
        <div className="description">
          <div className="message">{props.message}</div>
          <div className="details">
            - {props.clientName}
            <div className="position">
              <img src={props.companyLogo} alt="company" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
