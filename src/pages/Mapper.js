import "../../src/stylesheets/mapper.css";


export default function Mapper(props) {
  return (
    <div className="mapper" style={{background: props.colorCode}}>
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
            <div>{props.list[0]}</div>
            <div>{props.list[1]}</div>
            <div>{props.list[2]}</div>
            <div className="mapper-active">
            {props.list[3]}<img src={props.roundArrow}></img>
            </div>
            <div>{props.list[4]}</div>
            <div>{props.list[5]}</div>
            <div className="start-button" style={{
              backgroundColor: props.accentColor,
              boxShadow:  "220px 80px 20px 0px $props.shadowColor"
            }}>Explore {props.title}</div>
          </div>
          <div className="coursel-images">
            <img src={props.courselImage} />
            <div className="mapper-message">{props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
