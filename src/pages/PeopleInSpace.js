import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import PeopleInSpaceItem from '../components/PeopleInSpaceItem';

class PeopleInSpace extends Component {
  constructor (props) {
    super(props)
    this.state = {
      people:[],
    }
    this.peopleInSpace();
  }

  // fetch api data and store people into state
  peopleInSpace(){
		fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then((data) => {
			if(data.message === 'success'){
				this.setState({people:data.people});
			}
    }).catch(console.log);
	}

  render () {
    // dynamically create components and pass api data in through props
    const PeopleInSpaceItems = this.state.people.map((person)=>{ return ( <PeopleInSpaceItem key={person.name} person={person} /> ) });

    return (
      <Container>
      <br />
        <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
          { PeopleInSpaceItems }
        </Grid>
      </Container>
    )
  }
}

export default PeopleInSpace
