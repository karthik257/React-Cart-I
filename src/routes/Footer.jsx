import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footContainer}>
      <div>
        <h3>Contact us @mycart.in</h3>
      </div>
      <div>
        <h3>Chat with us +9145789650</h3>
      </div>
      <div>
        <h3>
          &copy; Copyright 2022
        </h3>
      </div>
    </div>
  );
};
