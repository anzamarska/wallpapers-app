import React from "react";
import styles from "./Modal.module.scss";
import icon from "../../assets/bheart.png";

const Modal = (props) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={props.closeModal}>
      click to discover
    </button>
    <p className={styles.text}>
      Welcome to the Wallpapers Search application. This application will allow
      you to choose a category according which we will offere You the most
      beautiful wallpapers on the Internet. Thank you for Your interests. Hava a
      nice search!
      <img className={styles.icon} src={icon} alt="" />
    </p>
  </div>
);

export default Modal;
