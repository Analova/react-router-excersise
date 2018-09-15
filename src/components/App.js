import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import characters from '../characters'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CharacterPage from './CharacterPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/" exact activeClassName="chartreuse">Home</NavLink>{' '}
          <NavLink to="/about" activeClassName="chartreuse">About</NavLink>
        </nav>
        <h1>Harry Potter characters</h1>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/characters/:id" component={CharacterPage} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

function Page404(props) {
  return <h1>404</h1>
}

export default App;
