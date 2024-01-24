import "../src/stylesheets/mapper.css";
import mapperImage from "../src/assets/Group 48108118.png";
import courselImage from "../src/assets/Group 48109136.png";
import roundArrow from "../src/assets/Group 48109151.png";

export default function Mapper() { 
  return (
    <div className="mapper">
      <div className="info-section">
        <div className="details">
          <h1>Mapper</h1>
          <div>Explore the collaborative persona mapper</div>
        </div>
        <div className="mapper-image">
          <img src={mapperImage} />
        </div>
      </div>
      <div className="description">
        <div className="row-1">
          <div className="list-items">
            <div>Create up to 10 personas in a single view</div>
            <div>Enrich personas with our Attributes Library</div>
            <div>Solicit quick feedback</div>
            <div className="mapper-active">
              Leverage AI <img src={roundArrow}></img>
            </div>
            <div>Assign action items</div>
            <div>Generate persona similarity and attribute analysis</div>
            <div className="start-button">Explore Mapper</div>
          </div>
          <div className="coursel-images">
            <img src={courselImage} />
            <div className="mapper-message">Create rich persona attributes and images using generative AI.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
