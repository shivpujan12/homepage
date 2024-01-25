import { useEffect, useRef, useState } from "react";
import "../../src/stylesheets/mapper.css";
import uiCourselImage from "../../src/assets/Group 48109412.png";
import { act } from "react-dom/test-utils";

export default function Mapper(props) {
  const [active, setActive] = useState(0);
  const imgRef = useRef(null);

  return (
    <div className="mapper" style={{ background: props.colorCode }}>
      <div className="info-section">
        <div className="details">
          <h1>{props.title}</h1>
          <div>{props.subtitle}</div>
        </div>
        <div className="mapper-image">
          <img src={props.introImage} />
        </div>
      </div>
      <div className="description">
        <div className="row-1">
          <div className="list-items">
            {props.list.map((e, i) => {
              return (
                <div
                  className={active === i ? "mapper-active" : ""}
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  {e}
                  <img
                    className={active === i ? "" : "hide"}
                    src={props.roundArrow}
                    alt="arrow"
                  ></img>
                </div>
              );
            })}

            <div
              className="start-button"
              style={{
                backgroundColor: props.accentColor,
                boxShadow: "220px 80px 20px 0px $props.shadowColor",
              }}
            >
              Explore {props.title}
            </div>
          </div>
          <div className="coursel-images">
            <img src={props.courselImage[active%2]} alt={"coursel"} />
            <div className="mapper-message">{props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
