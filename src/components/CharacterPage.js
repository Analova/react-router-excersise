import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import characters from '../characters'

class CharacterPage extends Component {
  render() {
    let id = this.props.match.params.id
    let character = characters.find(c => c._id === id)
    let fields = ["name", "role", "house", "school", "boggart", "bloodStatus", "species"]
    return (
      <div className="CharacterPage">
        <h2>Character Page</h2>

        <div><strong>role</strong>: {character.role}</div>
        {character.house && <div><strong>house</strong>: {character.house}</div>}
        {character.school &&   <div><strong>school</strong>: {character.school}</div> }
        {character.boggart &&  <div><strong>boggart</strong>: {character.boggart}</div> }
        <div><strong>bloodStatus</strong>: {character.bloodStatus}</div>
        <div><strong>species</strong>: {character.species}</div>
      </div>
    );
  }
}

export default CharacterPage;