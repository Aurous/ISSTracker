import React, { Component } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import Image from 'material-ui-image';
import blackHole from '../imgs/black_hole.png';

class Error404 extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }

  }
	// attempt to render text ontop of image and allow it to scale.
  render () {
		let divStyle = {
			position:'absolute',
			top: '35%',
			left: '25%',
			textAlign:'center',
			backgroundColor:'rgba(48,48,48,0.6)',
			borderRadius:'15px',
			padding:'10%',
		}
    return (
      <Container>
				<Grid container direction="row" justify="center" alignItems="center" style={{ minHeight: "94vh" }}>
					<Grid item xs={8}>
						<div style={{position:'relative'}} >
							<Image id="blackHole" src={blackHole} aspectRatio={(1/1)} color='#303030' />
							<div style={divStyle}>
								<Typography variant="h4" color="secondary">Error 404</Typography>
								<Typography variant="h4" color="secondary">Page Not Found</Typography>
							</div>
						</div>
					</Grid>
				</Grid>
      </Container>
    )
  }
}

export default Error404
