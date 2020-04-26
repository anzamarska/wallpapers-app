import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={props.closeModal}>
      X
    </button>
    <p className={styles.text}>
      Welcome to the application. This application will allow you to choose a
      category according which we will offere You the most beautiful wallpapers
      on the Internet. Thank you for Your interests. Hava a nice search!
    </p>
  </div>
);

export default Modal;
