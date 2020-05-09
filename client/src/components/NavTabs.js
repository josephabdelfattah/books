import React, { Component } from "react";
// to make router work
import {Link} from "react-router-dom";

// NavTabs is the navbar, and controls what page is loaded.
class NavTabs extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-6">
          <div className="navbar justify-content-between">

            <ul className="nav nav-tabs border-bottom-0">
              {/* Link to "About me" (Home) page */}
              <li className="nav-item">
                <Link
                  to="/search"
                  className="nav-link text-dark"
                >Search</Link>
              </li>

              {/* Link to Portfolio page */}
              <li className="nav-item">
                <Link
                  to="/saved"
                  className="nav-link text-dark"
                >Saved</Link>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
  
    );
  }
}

export default NavTabs;
