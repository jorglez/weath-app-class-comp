import React, { Component } from 'react';
import { CardCss } from '../styles/CardCss'
import CloseBtnCss from '../styles/CloseBtnCss'
import CardBodyCss from '../styles/CardStyles/CardBodyCss';
import CBLeftCss from '../styles/CardStyles/CBLeftCss';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
      name: props.name,
      id: props.id,
      key:props.id,
      img: props.img,
      onClose: props.onClose
    }
  }
  render() {
    //console.log("desde card.jsx",this.state.onClose)
    return (
      <CardCss key={this.state.key} id={this.state.id}>
        <CloseBtnCss onClick={e=> {
          e.preventDefault()
          this.state.onClose(this.state.id)
          }}>X</CloseBtnCss>
        <h2>{this.state.name}</h2>
        <CardBodyCss> {/*info body*/}
          <CBLeftCss>{/*info body left*/}
            <div> {/* min_temp side */}
              <p>Min</p>
              <p>{this.state.min}°c </p>
            </div>
            <div>{/* max_temp side */}
              <p>Max</p>
              <p>{this.state.max}°c </p>
            </div>
          </CBLeftCss>
          <div>{/*info body right (icon)*/}
            <img src={`http://openweathermap.org/img/wn/${this.state.img}@2x.png`} alt="" />
          </div>
        </CardBodyCss>
      </CardCss>
    );
  }
}

export default Card;