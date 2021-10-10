import React, { Component } from 'react';
import { SBCss } from '../styles/SBCss'

/* otra vez se asigna la función onSearch que se ha estado enviando como prop desde App, ahora sí se va a usar:
El state de este componente tiene 2 propiedades: 
- city, que va a guardar el nombre de la ciudad o pais buscados.
- onSearch, que ha viajado de App a Nav y ahora a SearchBar, por fin podrá guardar el valor que usa como parámetro para pedir la info a la api de clima.
*/

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      onSearch: this.props.onSearch
    }
    //se bindea si no es arrow function
    this.setCity = this.setCity.bind(this)

  }
  //setCity es la función que cambia el estado de ciy
  //aprovecha el evento submit para copiar el texto del input y asignarlo
  //como nuevo valor de city
  setCity(e) {
    this.setState({ city: e.target.value })
    //recordar que los state solo reciben objetos, por eso dice setState( {} )
    //MUCHA ATENCION A LAS LLAVES O MARCARÁ ERROR
  }
  render() {
    return (
      <SBCss onSubmit={(e) => {
        //el valor enviado en el evento "submit" es el último valor
        //almacenado en this.state.city
        e.preventDefault()
        this.state.onSearch(this.state.city)
      }}>
        <input
          type="text"
          id="buscar"
          placeholder='Search Country or State'
          value={this.state.city /*valor inicial (vacío) de city*/}
          onChange={
            this.setCity //guarda el string que se quiere buscar en city
          } 
        />
        <button type='submit'>Search</button>
      </SBCss>
    );
  }
}

export default SearchBar;