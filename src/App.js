import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import ISSEarth from './pages/ISSEarth';
import Error404 from './pages/Error404';
import PeopleInSpace from './pages/PeopleInSpace';

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
		}
	}

	render () {
		// Enable dark ui
		const theme = createMuiTheme({
		  palette: {
		    type: 'dark',
		  },
		});
		// use react-router-dom to create router with routes
		return (
			<MuiThemeProvider  theme={theme}>
				<CssBaseline />
				<Router>
					<Navbar/>
					<Switch>
						<Route path="/" exact component={Welcome} />
						<Route path="/iss" component={ISSEarth} />
						<Route path="/uis" component={PeopleInSpace} />
						<Route path="*" component={Error404} />
					</Switch>
				</Router>
			</MuiThemeProvider >
		)
	}
}

export default App
