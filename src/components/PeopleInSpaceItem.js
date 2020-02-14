import React, { Component } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton} from '@material-ui/core';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Airplane from '../imgs/airplane.png';

class PeopleInSpaceItem extends Component {
  _isMounted = false;
  constructor (props) {
    super(props)
    this.state = {
      photoIndex:0,
			urls:[],
    }

    this.getPortraitPhotos(this.props.person.name);
  }

  // fetch data and put all urls into state
  getPortraitPhotos(name){
    fetch('https://images-api.nasa.gov/search?q='+name+'&media_type=image&description=portrait').then(res => res.json()).then((data) => {
      let urls = data.collection.items.map((item)=>{
        return item.links[0].href;
      })
      this.setState({urls:urls});
    }).catch(console.log);
  }

  // check that the next photo is not going to be out of the limit then add or move to zero
  nextPhoto(){
      this.setState({photoIndex: ((Object.keys(this.state.urls).length-1) !== (this.state.photoIndex))?this.state.photoIndex + 1:0});
  }

  // check that the previous photo is not going to be out of limit then subtract or move to last object length
  prevPhoto(){
    this.setState({photoIndex: (this.state.photoIndex !== 0)?this.state.photoIndex-1:Object.keys(this.state.urls).length-1});
  }

  // Load Airplane photo when getting api data then load urls base on index
  getPhoto(){
    if(this.state.urls){
      return this.state.urls[this.state.photoIndex];
    }else{
      return Airplane;
    }
  }

  render () {
    return (
      <Grid item xs={12} md lg xl>
        <Card>
          <CardMedia style={{height:'40vh',backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:' 50% 50%'}} image={this.getPhoto()} title="Paella dish"
          />
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p">
              {this.props.person.name} is on the {this.props.person.craft}
            </Typography>
          </CardContent>
          <CardActions disableSpacing={true}>
            <Grid container justify="space-between" spacing={10}>
              <Grid item xs>
                <IconButton aria-label="Previous" onClick={()=>{this.prevPhoto()}} >
                  <ArrowBackIosRoundedIcon />
                </IconButton>
              </Grid>
							<Grid item xs >
								<Typography align="center">{this.state.photoIndex+1}/{Object.keys(this.state.urls).length}</Typography>
              </Grid>
              <Grid item xs>
                <IconButton style={{float:'right'}} aria-label="Next" onClick={()=>{this.nextPhoto()}} >
                  <ArrowForwardIosRoundedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
  );
  }
}

export default PeopleInSpaceItem
