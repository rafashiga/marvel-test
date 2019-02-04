import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './screen/Home'
import Characters from './screen/Characters'
import Navbar from './components/Navbar/Navbar'
import CharactersDetail from './components/Characters/CharactersDetail'
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faInstagram)

class App extends Component {
  render() {
	 return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Navbar/>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/characters" component={Characters} />
						<Route name="characterDetail" path="/characterDetail/:id" component={CharactersDetail} />
					</Switch>
					<Footer />
				</div>
		  	</BrowserRouter>
		</div>
	 );
  }
}

export default App;
