import React from "react";
import style from "./GridWrapper.module.scss";
import Photo from "./Photo/Photo";

const GridWrapper = (props) => (
  <div className={style.photosWrapper}>
    <p>shjdhjsfh</p>
    <Photo
      photo1={props.photo1}
      photo2={props.photo2}
      photo3={props.photo3}
      componentDidMount={props.componentDidMount}
    />
  </div>
);

export default GridWrapper;
