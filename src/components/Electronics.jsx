import React, { useEffect, useState } from "react";
import styles from "./Electronics.module.css";

export const Electronics = () => {
  const [electronicData, setElectronicData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/posts", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setElectronicData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.gridContainer}>
      {electronicData.map((elem) => {
        if (elem.category === "electronics") {
          return (
            <div key={elem.id} className={styles.gridItem}>
              <p>{elem.title}</p>
              <div>
                <img src={elem.image} alt="electronics" className={styles.gridImg }/>
              </div>
              <p>₹ {elem.price}</p>
            </div>
          );
        } else {
          return <div key={`${elem.id}`}></div>;
        }
      })}
    </div>
  );
};
