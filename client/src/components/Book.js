import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './images/trash-solid.svg';



class Book extends Component {
  // state = {
  //   booksSaved: [],
  //   booksFound: []
  // };

  render() {
    return (
      <div className="border rounded my-4">
        <div className="row">
          <div className="col-8">
            <h3>{this.props.book.title}</h3>
          </div>
          <div className="col-1">
            {/* <button className="btn btn-primary">View</button> */}
            <button className="btn"><i className="fa fa-eye"></i></button>
          </div>
          <div className="col-1">
            <button className="btn"><i className="fa fa-trash"></i></button>
          </div>
        </div>

        <div className="row">
          <div className="col-1">
            <img className="img-fluid mx-2" src={this.props.book.image} alt="pic" />
          </div>
          <div className="col-10 my-2">
            {this.props.book.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Book;