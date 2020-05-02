import React from "react";
import style from "./Form.module.scss";

const Form = (props) => (
  <form className={style.formWrapper} onSubmit={props.handleSubmit}>
    <label>
      From which category would you like us to find wallpapers for you?
      <input
        className={style.searchInput}
        type="text"
        variable={props.variable}
        onChange={(e) => props.handleCategoryChange(e)}
      />{" "}
    </label>
    <input className={style.searchInput} type="submit" value="search" />
    <p className={style.errorTest}>{props.preventErrotText}</p>
  </form>
);

export default Form;
