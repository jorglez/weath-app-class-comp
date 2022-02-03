import React, { Component } from 'react';
import {NavCss} from '../styles/NavCss'
import SearchBar from './SearchBar';
import {NavLink, Route} from 'react-router-dom'

/* para poder enviar la función de onSearch hasta el searchBar, es necesario asignarlo al state de éste componente y después enviar el estado como prop al siguiente, sino no va a transferirse la información de regreso desde el searchBar hasta app */

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
      onSearch: this.props.onSearch
    }
	}
	render() {
		return (

			<NavCss>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <Route
          exact path="/"
          render={()=><SearchBar onSearch={this.state.onSearch}/>}
        />
			</NavCss>
		);
	}
}

export default Nav;