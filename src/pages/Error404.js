import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core';

class Error404 extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Container><br />
        <Typography variant="h4"><Typography variant="h4" color="secondary">Error 404</Typography>Page Not Found</Typography>
      </Container>
    )
  }
}

export default Error404
