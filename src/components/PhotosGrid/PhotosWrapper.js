import React from "react";
import style from "./PhotosWrapper.module.scss";
import Photo from "./Photo/Photo";
import Form from "../Form/Form";

const PhotosWrapper = (props) => (
  <div className={style.photosWrapper}>
    <p className={style.title}>
      Find the most beautiful wallpapers you can imagine
    </p>
    <Form
      handleCategoryChange={props.handleCategoryChange}
      handleSubmit={props.handleSubmit}
      variable={props.variable}
      preventErrotText={props.preventErrotText}
    ></Form>
    <Photo
      photo1={props.photo1}
      photo2={props.photo2}
      photo3={props.photo3}
      autor1={props.autor1}
      autor2={props.autor2}
      autor3={props.autor3}
      componentDidMount={props.componentDidMount}
      addToFavourites={props.addToFavourites}
      photos={props.photos}
    />
  </div>
);

export default PhotosWrapper;
