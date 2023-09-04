import styles from "./landingpage.module.css";
import { NavLink } from "react-router-dom";

function Lpage() {
  return (
    <div className={styles.landdiv}>
      your videogames page
      <NavLink to="/home">
        <button className={styles.homebtn}>Home</button>
      </NavLink>
    </div>
  );
}

export default Lpage;
