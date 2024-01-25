import "../stylesheets/coursel.css";
import bulb from "../assets/bulb.svg";
import arr from "../assets/rightArr.svg";
import recorder from "../assets/recorder.svg";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import { useEffect, useRef } from "react";

export default function Coursel() {
  return (
    <div className="coursel">
      <div className="title">
        Play with the <br /> Persona Mapper and UI Reviews
      </div>
      <CourselSpace />
      <div className="action-buttons">
        <div className="btn">
          <img src={bulb} style={{ marginRight: "5px" }} />
          Persona Library
          <img src={arr} style={{ marginLeft: "5px" }} />
        </div>
        <div className="btn">
          <img src={recorder} style={{ marginRight: "5px" }} />
          UI Reviews Library
          <img src={arr} style={{ marginLeft: "5px" }} />
        </div>
      </div>
      <div className="title">
        Make informed decisions on feature prioritization and design.
      </div>
    </div>
  );
}


function CourselSpace() {

    const sectionRef = useRef(null);

    function scroll(action){
        console.log("I am working!");
        if(action==="left")
        sectionRef.current.scrollLeft +=150 ;
        else
        sectionRef.current.scrollLeft -=150;
    }

  return (
    <div className="coursel-section" ref={sectionRef}>

      <div className="actions" >
        <div className="arrow-left" style={{backgroundColor: "white", borderRadius: "50%"}}
            onClick={ () => scroll("left")}
        >
          <img src={arrowLeft} />
        </div>
        <div className="arrow-right" style={{backgroundColor: "white", borderRadius: "50%"}}
            onClick={()=> scroll("right")}
        >
          <img src={arrowRight} />
        </div>
      </div>

      <Card img={img5} title={"Apper Website"} subtitle={"by BuildUX"} />
      <Card
        img={img2}
        title={"E-Commerce North America Buyer Pe..."}
        subtitle={"by BuildUX"}
      />
      <Card img={img1} title={"JIDOX Analysis"} subtitle={"by BuildUX"} />
      <Card
        img={img3}
        title={"OTT (Over-the-top) Streaming Servi..."}
        subtitle={"by BuildUX"}
      />
      <Card img={img4} title={"Martex Website"} subtitle={"by BuildUX"} />
      <Card img={img4} title={"Martex Website"} subtitle={"by BuildUX"} />
    
      <Card img={img4} title={"Martex Website"} subtitle={"by BuildUX"} />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} />
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-subtitle">{props.subtitle}</div>
    </div>
  );
}
