import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core'

class Navbar extends React.Component {
  render() {
    let headerStyle = {color:'white', textDecoration:'none'}
    return (
      <AppBar position="static" color="inherit">
          <Toolbar variant="dense">
            <NavLink to='/' style={headerStyle}>
              <MenuItem>
                <Typography variant="h6" color="inherit">ISSTracker</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to='/iss' style={headerStyle}>
              <MenuItem>
                <Typography variant="subtitle2" color="inherit">Tracker</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to='/uis' style={headerStyle}>
              <MenuItem>
                <Typography variant="subtitle2" color="inherit">People In Space</Typography>
              </MenuItem>
            </NavLink>
          </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
