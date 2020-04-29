import React from "react";
import style from "./Form.module.scss";

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <label>
      From which category would you like us to find wallpapers for you?
      <input
        type="text"
        variable={props.variable}
        onChange={(e) => props.handleCategoryChange(e)}
      />{" "}
    </label>
    <input type="submit" value="search" />
  </form>
);

export default Form;
