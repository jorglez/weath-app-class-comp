import React, { Component } from 'react';
import Card from './Card';
import { CardsCss } from '../styles/CardsCss';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //ya que la función la heredaron por props, debe añadirse al state del componente actual
      onClose: this.props.onClose,
    }
  }
  render() {
    //const cities = this.props.cities
    //console.log("desde cards",cities)
    return (
      <CardsCss>
        {this.props.cities.map(city => <Card
          max={city.max}
          min={city.min}
          name={city.name}
          id={city.id}
          key={city.id}
          img={city.img}

          onClose={this.state.onClose}
        />)}
      </CardsCss>
    );

  }
}

export default Cards;