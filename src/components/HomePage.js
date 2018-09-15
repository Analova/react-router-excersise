import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import characters from "../characters";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>Home Page</h2>
        {characters.map(c => (
          <div>
       <Link to={"/characters/" + c._id}>{c.name} </Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;