import React from "react";
import style from "./Photo.module.scss";

const Photo = (props) => {
  return (
    <>
      <div className={style.wrapper}>
        <img className={style.photo} src={props.photo1} alt="" />
        <p className={style.autorName}>{props.autor1} </p>
      </div>
      <div className={style.wrapper}>
        <img className={style.photo} src={props.photo2} alt="" />
        <p className={style.autorName}>{props.autor1} </p>
      </div>
      <div className={style.wrapper}>
        <img className={style.photo} src={props.photo3} alt="" />
        <p className={style.autorName}>{props.autor1} </p>
      </div>
    </>
  );
};

export default Photo;
