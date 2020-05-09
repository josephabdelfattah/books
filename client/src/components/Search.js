import React, { Component } from "react";
import BookList from "./BookList";
import axios from "axios";

// based on https://stackoverflow.com/questions/54226224/from-an-array-of-objects-extract-value-of-two-properties-into-an-array
function getReleventInfo(arr) {
  return arr.map(function(e) {
    return {
      title: e.volumeInfo.title,
      authors: e.volumeInfo.authors,
      description: e.volumeInfo.description,
      image: e.volumeInfo.imageLinks.thumbnail,
      link: e.volumeInfo.infoLink
    };
  });
}

class Search extends Component {
  state = {
    title: "",
    header: "",
    booksFound: [],
    booksSaved: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // check for first and last name
    if (this.state.title === "") {
      alert("Please enter a book title.");
    } else {

      const key = "API_KEY=AIzaSyC-eqHdoNGZpA9BBGrm5-UAX7VXxktosg0";
      const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.title}&${key}`;

      axios
        .get(url)
        .then(response => {
          //   console.log(response.data.items);

          let booksFound = getReleventInfo(response.data.items);
          console.log(booksFound);

          this.setState({
            booksFound: booksFound,
            header: "Books Found",
            title: ""
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="border rounded mb-4">
          <h2 className="ml-3">Book Search</h2>
          <div className="form-group row mx-1">
            <div className="col-10">
              <input
                className="form-control"
                id="bookTitle"
                type="text"
                placeholder="Title"
                value={this.state.title}
                name="title"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-2">
              <button onClick={this.handleSearch}>Search</button>
            </div>
          </div>
        </div>

        <div className="row mx-2">
          <div className="col-12">
            <BookList 
                header={this.state.header} 
                books={this.state.booksFound}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
