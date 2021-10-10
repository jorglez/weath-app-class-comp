import React, { Component } from 'react';
import { Global } from './styles/GlobalCss'
import Nav from './components/Nav'
import Cards from './components/Cards'

/*
  Los hooks declaran en una línea la variable, la función que manipula dicha variable y el tipo (string, objeto, etc.) que espera, ejemplo: [cities, setCities] = useState([]).

  Por otro lado el manejo de estados en un Class Component requiere de varios pasos:

  1. dentro de su constructor creas el objeto state (this.state: {}), donde asignas a cada propiedad un tipo de dato esperado, o el valor que le haya llegado por props.

  2.Creas la función que manipulará el estado de la propiedad deseada, por ejemplo setCities tomará el objeto retornado por la api de clima y la añadirá al array cities, que actualmente esta vacio (cities:[])

    2.1. Después de crear la función, debes bindearla al objeto para que tome los valores del mismo o no funcionará; si usas arrow functions se bindea de forma automática, así te ahorras un bind() por cada función

  3.Se define la situación bajo la que cambiará el estado del componente. En esta app, se necesita ejecutar onSearch (pasada como prop desde app hasta searchBar) y que exista el pais o estado buscado para que se cree el objeto que se mandará a setCities como parámetro
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [], //propiedad que espera un dato para cambiar de estado
      titulo: this.props.titulo, //valor asignado desde props heredados
      onClose: this.onClose
    }

    //si usas arrow function no tienes que bindear, se hace automatico
    //si no es con arrow function, debes bindear cada función al objeto

    //this.setCities = this.setCities.bind(this) <--declarado con arr func
    this.onClose = this.onClose.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  //pasa como param la nueva ciudad para cambiar el state del arr que
  //contiene los objetos devueltos por el searchBar
  setCities = (ciudadRes) => {
    //los setState de un class component solo reciben objetos como param.
    this.setState({ cities: [...this.state.cities, ciudadRes] })
    console.log(this.state.cities)
  }

  filterCities= (id) =>{}

  onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.json())
      .then(recurso => {
        if (recurso.main !== undefined) {
          const ciudadRes = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            name: recurso.name
          }
          let contenido = this.state.cities
          if (contenido.findIndex(city => city.name === ciudadRes.name) === -1) {
            this.setCities(ciudadRes)
          }
        } else {
          alert("ciudad no encontrada")
        }
        //console.log(this.state.cities)
      })
  }

  onClose(id) {
    this.setState({cities: [this.state.cities.filter(c=>c.id!==id)]})
  }


  render() {

    //la función onSearch debe ser pasada como prop a cada componente hasta
    //llegar al que lo usará (App --> Nav --> searchBar)

    return (
      <Global className="App">
        <Nav onSearch={this.onSearch} />
        <Cards
          cities={this.state.cities}
          onClose={this.state.onClose}
        />
      </Global>
    );
  }
}

export default App;
