import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import Image from 'material-ui-image'
import worldMap from '../imgs/world_map.png';
import astronaut from '../imgs/astronaut.png';

class ISSEarth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      iss_position:{
        latitude:10,
        longitude:10,
      },
    }
    this.issPosition()
  }

  componentDidMount(){
    // Start set interval to update issPosition
    this.timer = setInterval(this.issPosition.bind(this), 2000);
  }

  componentWillUnmount(){
    // Clear timer when switching to other routes
    clearInterval(this.timer);
  }

  // Fetch api data and process lat lon into x y
	issPosition(){
		fetch('http://api.open-notify.org/iss-now.json').then(res => res.json()).then((data) => {
			if(data.message === 'success'){
        // Get lat lon from api
				let lon = data.iss_position.longitude;
				let lat =  data.iss_position.latitude;
        // Get map size to calc x y
				let mapWidth = document.getElementById('worldMap').width;
				let mapHeight = document.getElementById('worldMap').height;
        // Get iss icon center to plot icon on x y
        let issWidth = (document.getElementById('issIcon').width/2);
        let issHeight = (document.getElementById('issIcon').height/2);
        // Convert lat lon in to x y to plot on size of map
			 	let y = Math.floor((mapWidth * (0.5 + (lon * Math.PI / 180.0) / (2 * Math.PI)))-issWidth);
				let x = Math.floor((mapHeight * (0.5 - (lat * Math.PI / 180.0) / Math.PI))-issHeight);
        // Set iss_position to x y and lat lon
				this.setState({iss_position:{x:x, y:y, lat:lat, lon:lon}})
			}
    }).catch(console.log);
	}

  render () {
    // Set variable styling to allow the position of the iss to change
    let ISSIconStyle = {
      position: 'absolute',
      color: 'white',
      top: `${this.state.iss_position.x}px`,
      left: `${this.state.iss_position.y}px`,
			height:'5%',
			width:'4%',
		}

    return (
			<Container>
			<Grid container direction="row" justify="center" alignItems="center" style={{ minHeight: "94vh" }}>
				<Grid item xs={12}>
				<Typography variant="subtitle1">Latitude: {this.state.iss_position.lat} Longitude: {this.state.iss_position.lon}</Typography>
        <div style={{position:'relative'}} >
					<Image id="worldMap" src={worldMap} aspectRatio={(16/9)} color='#303030' />
          <div style={ISSIconStyle} >
            <img id="issIcon" alt="ISS" src={astronaut} style={{position: 'absolute', width:'100%', height:'100%'}}/>
          </div>
        </div>
				</Grid>
			</Grid>
			</Container>
    )
  }
}

export default ISSEarth
