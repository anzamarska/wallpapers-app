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
      favouritesImg: [
        {
          src:
            "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyOTc2OX0",
          autor: "David van Dijk",
        },
      ],
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
          photo1: data.results[0].urls.regular,
          photo2: data.results[1].urls.regular,
          photo3: data.results[2].urls.regular,
          autor1: data.results[0].user.name,
          autor2: data.results[1].user.name,
          autor3: data.results[2].user.name,
        });
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
            photo1: data.results[0].urls.regular,
            photo2: data.results[1].urls.regular,
            photo3: data.results[2].urls.regular,
            autor1: data.results[0].user.name,
            autor2: data.results[1].user.name,
            autor3: data.results[2].user.name,
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

  addToFavourites = (src, autor) => {
    this.setState({
      favouritesImg: [...this.state.favouritesImg, { src, autor }],
    });
    console.log(
      "this.state.favouritesImg",
      this.state.favouritesImg,
      "src",
      this.state.favouritesImg[0].src,
      "autor",
      this.state.favouritesImg[0].autor
    );
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="App">
        {isModalOpen && <Modal closeModal={this.closeModal} />}

        <PhotosWrapper
          photo1={this.state.photo1}
          photo2={this.state.photo2}
          photo3={this.state.photo3}
          autor1={this.state.autor1}
          autor2={this.state.autor2}
          autor3={this.state.autor3}
          preventErrotText={this.state.preventErrotText}
          componentDidMount={this.componentDidMount}
          handleCategoryChange={this.handleCategoryChange}
          handleSubmit={this.handleSubmit}
          variable={this.state.variable}
          addToFavourites={this.addToFavourites}
        />
        <FavPicturesWrapper favouritesImg={this.state.favouritesImg} />
      </div>
    );
  }
}

export default App;
