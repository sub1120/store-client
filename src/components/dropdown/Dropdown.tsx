"use client";

import { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles.dropdown}>
      <div role="button" className={styles.show} onClick={handleOpen}>
        <div>Open - Closes at 8 PM </div>
        <div className={isOpen ? styles.uparrow : styles.downarrow}></div>
      </div>
      <ul
        className={`${styles.list} ${
          isOpen ? styles.listOpen : styles.listClose
        }`}
      >
        <li className={styles.item}>
          <span>Monday</span> <span>10AM - 8PM</span>
        </li>
        <li className={styles.item}>
          <span>Monday</span> <span>10AM - 8PM</span>
        </li>
        <li className={styles.item}>
          <span>Monday</span> <span>10AM - 8PM</span>
        </li>
        <li className={styles.item}>
          <span>Monday</span> <span>10AM - 8PM</span>
        </li>
        <li className={styles.item}>
          <span>Monday</span> <span>10AM - 8PM</span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
