import React from "react";
import "./App.css";
import GridWrapper from "./components/PhotosGrid/GridWrapper";
import Modal from "./components/Modal/Modal";

const API_URL = "https://api.unsplash.com/search/photos";
const VARIABLE = "bear";
const APP_ID = "jiR34-uAyURzlbL2qG1-4Fbrheyb13KakZT-O0X7HjM";

const URL = `${API_URL}?query=${VARIABLE}&client_id=${APP_ID}`;

// const URL =
// "https://api.unsplash.com/search/photos?query=meal&client_id=jiR34-uAyURzlbL2qG1-4Fbrheyb13KakZT-O0X7HjM";

class App extends React.Component {
  state = {
    isModalOpen: true,
    // photo1: "",
    // photo2: "",
    // photo3: "",
  };

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          photo1: data.results[0].urls.regular,
          photo2: data.results[1].urls.regular,
          photo3: data.results[2].urls.regular,
        });
      });
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    console.log("fdsf");
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="App">
        {isModalOpen && <Modal closeModal={this.closeModal} />}
        {/* {CITY} */}
        {/* {this.state.temperature} &#8451; */}
        {/* <img
          src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          alt="weather icon"
        /> */}

        <GridWrapper
          photo1={this.state.photo1}
          photo2={this.state.photo2}
          photo3={this.state.photo3}
          componentDidMount={this.componentDidMount}
        />

        {/* <div>
          {this.state.wind} <p>m/s</p>
          <div className="windDir"> &uarr;</div>
        </div> */}
      </div>
    );
  }
}

export default App;
