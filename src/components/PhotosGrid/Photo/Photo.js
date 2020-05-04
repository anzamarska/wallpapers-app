import React from "react";
import style from "./Photo.module.scss";
import buttonIcon from "../../../assets/bheart.png";

const Photo = (props) => {
  return (
    <>
      <div className={style.wrapper}>
        <img className={style.photo} src={props.photo1} alt="" />
        <button
          className={style.likeButton}
          onClick={() => props.addToFavourites(props.photo1, props.autor1)}
        >
          <img src={buttonIcon} className={style.buttonIcon} alt="" />
        </button>
        <p className={style.autorName}>{props.autor1} </p>
      </div>

      <div className={style.wrapper}>
        <img className={style.photo} src={props.photo2} alt="" />
        <button
          className={style.likeButton}
          onClick={() => props.addToFavourites(props.photo1, props.autor1)}
        >
          <img src={buttonIcon} className={style.buttonIcon} alt="" />
        </button>
        <p className={style.autorName}>{props.autor2} </p>
      </div>

      <div className={style.wrapper}>
        <img className={style.photo} src={props.photo3} alt="" />
        <button
          className={style.likeButton}
          onClick={() => props.addToFavourites(props.photo1, props.autor1)}
        >
          <img src={buttonIcon} className={style.buttonIcon} alt="" />
        </button>
        <p className={style.autorName}>{props.autor3} </p>
      </div>
    </>
  );
};

export default Photo;
