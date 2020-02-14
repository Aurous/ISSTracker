import React, { Component } from 'react'
import { Container, Link, Typography } from '@material-ui/core';

class Welcome extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <Container><br />
        <Typography variant="h4">
          International Space Station Tracker
        </Typography><br />
        <Typography variant="h6">
          The tracking api utilizes <Link href="http://api.open-notify.org/" color="secondary">Open Notify</Link>, an <Link href="https://github.com/open-notify/Open-Notify-API" color="secondary">open source</Link> project that drive two of the apis in this project.
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="http://open-notify.org/Open-Notify-API/ISS-Location-Now/" color="secondary">ISS-Location-Now</Link> returns the current location of the International Space Station in latitude and longitude.
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="http://open-notify.org/Open-Notify-API/People-In-Space/" color="secondary">People-In-Space</Link> returns everyone who is currently in space with their name and what craft they are on.
        </Typography><br />
        <Typography variant="h6">
          The photos of the astronauts is being provided by NASA's Api <Link href="https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf" color="secondary">NASA Image and Video Library</Link>
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          Using the astronauts name then filtering the search for portrait in the description of the data returns the images that show the astronauts.
        </Typography><br /><br />
        <Typography variant="h5">
          React JS Frameworks used:
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="https://www.npmjs.com/package/react" color="secondary">React</Link> - Main javascript framework
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="https://www.npmjs.com/package/@material-ui/core" color="secondary">@material-ui/core</Link> - Main style and content manager
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="https://www.npmjs.com/package/@material-ui/icons" color="secondary">@material-ui/icons</Link> - Icons used on people in space page
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="https://www.npmjs.com/package/material-ui-image" color="secondary">material-ui-image</Link> - Used to make world map resize in 16:9 ratio
        </Typography><br />
        <Typography variant="body1" style={{marginLeft:'30px'}}>
          <Link href="https://www.npmjs.com/package/react-router-dom" color="secondary">react-router-dom</Link> - Enables app to have muiltiple pages easily
        </Typography><br />
      </Container>
    )
  }
}

export default Welcome
