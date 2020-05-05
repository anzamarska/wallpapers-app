import React from "react";
import style from "./Photo.module.scss";
import buttonIcon from "../../../assets/bheart.png";

const Photo = (props) => {
  return (
    <>
      {props.photos.map((photo) => (
        <div key={photo.urls.regular} className={style.wrapper}>
          <img className={style.photo} src={photo.urls.regular} alt="" />
          <button
            className={style.likeButton}
            onClick={() => props.addToFavourites(photo)}
          >
            <img src={buttonIcon} className={style.buttonIcon} alt="" />
          </button>
          <p className={style.autorName}>{photo.user.name} </p>
        </div>
      ))}
    </>
  );
};

export default Photo;
