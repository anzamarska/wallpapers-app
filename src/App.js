import React from "react";
import "./App.css";
import PhotosWrapper from "./components/PhotosGrid/PhotosWrapper";
import Modal from "./components/Modal/Modal";
import FavPicturesWrapper from "./components/FavouritesPictures/FavPicturesWrapper";

const API_URL = "https://api.unsplash.com/search/photos";
// let VARIABLE = "dogs";
const APP_ID = "jiR34-uAyURzlbL2qG1-4Fbrheyb13KakZT-O0X7HjM";

// const URL = `${API_URL}?query=${VARIABLE}&client_id=${APP_ID}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      variable: "",
      preventErrotText: "",
      favouritesImg: [],
      photos: [],
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}?query=minimal&client_id=${APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState({
          photos: data.results.slice(0, 9),
        });
        // console.log(data.results.slice(0, 2));
      });
  }

  handleCategoryChange(e) {
    this.setState({ variable: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("e.target", event.target, "variable", variable.value);

    fetch(`${API_URL}?query=${this.state.variable}&client_id=${APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.total > 2) {
          this.setState({
            photos: data.results.slice(0, 9),
            preventErrotText: "",
          });
          // this.mainInput.value = "";
        } else {
          this.setState({
            preventErrotText:
              "Sorry, we can't find the pictures you requested. We would be happy to offer you some other. Maybe You will be interested in beautiful pictures from categories such as meals, animal or minimal?",
          });
        }
      });
    this.setState({ variable: "" });
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  addToFavourites = (favPhoto) => {
    const thisStateFavouritesImg = this.state.favouritesImg;
    const favouritesImgInclude = this.state.favouritesImg.includes(favPhoto);

    const firstConditioal = this.state.favouritesImg.filter(
      (photo) => photo !== favPhoto
    );

    console.log(
      "thisStateFavouritesImg",
      thisStateFavouritesImg,
      "favouritesImgInclude",
      favouritesImgInclude,
      "firstConditioal",
      firstConditioal
    );

    this.setState({
      favouritesImg: this.state.favouritesImg.includes(favPhoto)
        ? this.state.favouritesImg.filter((photo) => photo !== favPhoto)
        : [...this.state.favouritesImg, favPhoto],
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="App">
        {isModalOpen && <Modal closeModal={this.closeModal} />}

        <PhotosWrapper
          preventErrotText={this.state.preventErrotText}
          componentDidMount={this.componentDidMount}
          handleCategoryChange={this.handleCategoryChange}
          handleSubmit={this.handleSubmit}
          variable={this.state.variable}
          addToFavourites={this.addToFavourites}
          photos={this.state.photos}
        />
        <FavPicturesWrapper
          favouritesImg={this.state.favouritesImg}
          addToFavourites={this.addToFavourites}
        />
      </div>
    );
  }
}

export default App;
