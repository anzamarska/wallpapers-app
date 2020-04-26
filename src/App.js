import React from "react";
import "./App.css";

const API_URL = "https://api.unsplash.com/search/photos";
const CITY = "meal";
const APP_ID = "jiR34-uAyURzlbL2qG1-4Fbrheyb13KakZT-O0X7HjM";

const URL = `${API_URL}?query=${CITY}&client_id=${APP_ID}`;
// const URL =
//   "https://api.unsplash.com/photos/random/?client_id=jiR34-uAyURzlbL2qG1-4Fbrheyb13KakZT-O0X7HjM";

// const URL =
// "https://api.unsplash.com/search/photos?query=meal&client_id=jiR34-uAyURzlbL2qG1-4Fbrheyb13KakZT-O0X7HjM";

class App extends React.Component {
  state = {
    photo1: "",
    photo2: "",
    photo3: "",
    //     temperature: "",
    //     icon: "",
    //     wind: "",
    //     windDeg: "",
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
          //           temperature: data.main.temp,
          //           icon: data.weather[0].icon,
          //           wind: data.wind.speed,
          //           windDeg: data.wind.deg,
        });
      });
  }

  // console.log({this.state.photo1});

  render() {
    return (
      <div className="App">
        <p>dsdssd</p>

        {/* {CITY} */}
        {/* {this.state.temperature} &#8451; */}
        {/* <img
          src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          alt="weather icon"
        /> */}

        <img src={`${this.state.photo1}`} alt="first ph" />
        <img src={`${this.state.photo2}`} alt="socond ph" />
        <img src={`${this.state.photo3}`} alt="third ph" />
        {/* <div>
          {this.state.wind} <p>m/s</p>
          <div className="windDir"> &uarr;</div>
        </div> */}
      </div>
    );
  }
}

export default App;
