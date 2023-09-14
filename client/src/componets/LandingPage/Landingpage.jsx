
import "./LandingPage.css";
import { NavLink } from "react-router-dom";

function Lpage() {
  return (
    <div className="landdiv">
      <div className="center-content">
        <h1>Your Videogames Page</h1>
        <div className="button-container">
          <NavLink to="/home">
            <button className="homebtn">Play</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Lpage;









// import "./landingPage.css";
// import { NavLink } from "react-router-dom";

// function Lpage() {
//   return (
//     <div className="landdiv" >
//       <h1>Your Videogames Page</h1>
//       <NavLink to="/home">
//         <button className="homebtn">Home</button>
//       </NavLink>
//     </div>
//   );
// }

// export default Lpage;
