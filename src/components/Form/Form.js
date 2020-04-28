import React from "react";
import style from "./Form.module.scss";

// class Form extends React.Component {
//   state = {
//     // category: "",
//     value: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.category]: e.target.value,
//     });
//   };

//   handleSubmit(event) {
//     alert("Podano następującą kategorie: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//
//           <input
//             type="text"
//             // category="category"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="search" />
//       </form>
//     );
//   }
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(category) {
    // this.setState({ category: event.target.value });
    // this.setState.onTemperatureChange(e.target.value);
  }
  handleSubmit(event) {
    alert("Podano następujące imię: " + this.state.category);
    event.preventDefault();
  }

  render() {
    const category = this.props.category;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          From which category would you like us to find wallpapers for you?
          <input
            type="text"
            category={category}
            onChange={this.handleCategoryChange}
          />{" "}
        </label>
        <input type="submit" value="search" />
      </form>
    );
  }
}

export default Form;
