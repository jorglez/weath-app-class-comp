import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AboutCss } from '../styles/AboutCss'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: this.props.titulo
    }
  }
  render() {
    return (
      <AboutCss>
        <h1>{this.state.titulo}</h1>

        <div className='texto'>
          <p>
            App creada en React que recibe los datos desde la API de <a target="_blank" href="https://openweathermap.org/">Open Weather App</a>.
          </p>
          <br />
          <p>
            Versión programada con Class Components
          </p>
          <br />
          <p>
            Estilos implementados con la librería de <a target="_blank" href="https://styled-components.com/"> Styled Components</a>.
          </p>
        </div>

      </AboutCss>
    );
  }
}

export default About;