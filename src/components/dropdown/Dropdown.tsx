"use client";

import { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  children,
  buttonText,
}: {
  children: React.ReactNode;
  buttonText: string | undefined;
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles.dropdown}>
      <div role="button" className={styles.show} onClick={handleOpen}>
        <div>{buttonText}</div>
        <div className={isOpen ? styles.uparrow : styles.downarrow}></div>
      </div>
      <ul
        className={`${styles.list} ${
          isOpen ? styles.listOpen : styles.listClose
        }`}
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
