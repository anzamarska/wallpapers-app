import React from "react";
import style from "./FavPicturesWrapper.module.scss";

const FavPicturesWrapper = (props) => (
  <div className={style.wrapper}>
    <p>Your favourites pictures</p>
    <div className={style.wrapper}>
      <img className={style.photo} src={props.favouritesImg[0].src} alt="" />
      <p className={style.autorName}>{props.favouritesImg[0].autor} </p>
    </div>
    {/* <div className={style.wrapper}>
      <img className={style.photo} src={props.favouritesImg[1].src} alt="" />
      <p className={style.autorName}>{props.favouritesImg[1].autor} </p>
    </div>
    <div className={style.wrapper}>
      <img className={style.photo} src={props.favouritesImg[2].src} alt="" />
      <p className={style.autorName}>{props.favouritesImg[2].autor} </p>
    </div> */}
  </div>
);

export default FavPicturesWrapper;
