import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.navMain}>
      {/* <div> */}
      <Link to="/electronics">Electronics</Link>
      <Link to="/clothes">Clothes</Link>
      <Link to="/paintings">Paintings</Link>
      {/* </div> */}

      <img
        src="https://cdn0.iconfinder.com/data/icons/winter-lollipop/374/Cart.png"
        alt="icon"
        className={styles.navIcon}
      />
    </div>
  );
};
