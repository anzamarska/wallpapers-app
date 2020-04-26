import React from "react";
import style from "./Photo.module.scss";

const Photo = (props) => {
  return (
    <>
      <img className={style.photo} src={props.photo1} alt="" />
      <img className={style.photo} src={props.photo2} alt="" />
      <img className={style.photo} src={props.photo3} alt="" />
    </>
  );
};

export default Photo;
