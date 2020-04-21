import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./searchagain.css";

class Searchagain extends Component {
  render() {
    return (
      <div className="searchagain_parent">
        <div className="search_result">
          <span style={{ fontWeight: "bold" }}>{`09 Trainers`} </span>for your
          search
        </div>
        <div className="search_option">
          Search Again
          <div className="previousarrow_div">
           <Link to="/searchtrainer"> <i class="fa fa-angle-left"></i> </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchagain;
