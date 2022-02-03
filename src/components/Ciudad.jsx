import React, { Component } from 'react';
import {CiudadCss} from '../styles/CiudadCss'

class Ciudad extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {min, max, img, name, wind, temp, weather, clouds, lat, long} = this.props.city
    return (
      <CiudadCss>
        <h1>{name}</h1>
        <div className="body">
          <div className="body-left">
            <p>Curr. Temp.: {temp}°c </p>
            <p>Min. Temp.: {min}°c</p>
            <p>Max. Temp {max}°c</p>
            <p>Wind: {wind}</p>
            <p>Weather: {weather}</p>
            <p>Clouds: {clouds}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude:  {long}</p>
          </div>
          <div className="body-right">
            <img src={`https://openweathermap.org/img/wn/${img}@2x.png`}/>
          </div>
        </div>
      </CiudadCss>
    );
  }
}

export default Ciudad;