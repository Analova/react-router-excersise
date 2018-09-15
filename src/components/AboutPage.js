import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import characters from '../characters'

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <h2>About Page</h2>
        <p>This website is a fan page of Harry Potter</p>
      </div>
    );
  }
}

export default AboutPage;