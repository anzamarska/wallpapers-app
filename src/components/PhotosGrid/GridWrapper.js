import React from "react";
import style from "./GridWrapper.module.scss";
import Photo from "./Photo/Photo";
import Form from "../Form/Form";

const GridWrapper = (props) => (
  <div className={style.photosWrapper}>
    <p className={style.title}>
      Find the most beautiful wallpapers you can imagine
    </p>
    <Form
      handleCategoryChange={props.handleCategoryChange}
      handleSubmit={props.handleSubmit}
      variable={props.variable}
    ></Form>
    <Photo
      photo1={props.photo1}
      photo2={props.photo2}
      photo3={props.photo3}
      autor1={props.autor1}
      componentDidMount={props.componentDidMount}
    />
  </div>
);

export default GridWrapper;
