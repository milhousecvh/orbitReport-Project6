import satData from "./satData";
import App from "../App";
import {filterByType, setSat, displaySats} from "../App";
import "./styling.css";

const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;

  return (
    <div className="flex-container">
    {displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      );
    })}
    <button onClick={() => setSat(satData)}>
    All Satellites
    </button>
  </div>
)};

export default Buttons;