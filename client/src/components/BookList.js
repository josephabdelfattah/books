import React, { Component } from "react";
import Book from "./Book.js"


class BookList extends Component {
  // state = {
  //   booksSaved: [],
  //   booksFound: []
  // };

  render() {
    return (
      <div className="row mx-2">
          <div className="col-12">
              <h2>{this.props.header}</h2>
              {this.props.books.map((book) => (
                <Book
                  book={book}
                />
              ))}
          </div>
      </div>
    );
  }
}

export default BookList;