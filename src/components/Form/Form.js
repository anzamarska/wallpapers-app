import React from "react";
import style from "./Form.module.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { VARIABLE: "" };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(e) {
    this.setState({ VARIABLE: e.target.value });
    // this.setState.onTemperatureChange(e.target.value);
  }
  handleSubmit(event) {
    alert("Podano następujące imię: " + this.state.VARIABLE);
    event.preventDefault();
  }

  render() {
    // const category = this.props.category;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          From which category would you like us to find wallpapers for you?
          <input
            type="text"
            category={this.state.value}
            onChange={this.handleCategoryChange}
          />{" "}
        </label>
        <input
          type="submit"
          value="search"
          onClick={this.props.changeCategory}
        />
      </form>
    );
  }
}

export default Form;
