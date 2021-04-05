import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Itemcard from '../ItemCard/ItemCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [info, setInfo] = useState([
    { 
      name: 'Pic 1',
      desc: 'Demo Description',
      link: '/images/Six.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Demo Info'
  },
    { 
      name: 'Pic 1',
      desc: 'Demo Description',
      link: '/images/Roger.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Demo Info'
  },
    { 
      name: 'Pic 1',
      desc: 'Demo Description',
      link: '/images/Twinchefs.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Demo Info'
  },
    { 
      name: 'Pic 1',
      desc: 'Demo Description',
      link: '/images/Mono.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Demo Info'
  },
    { 
      name: 'Pic 1',
      desc: 'Demo Description',
      link: '/images/Six.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Demo Info'
  },
    { 
      name: 'Pic 1',
      desc: 'Demo Description',
      link: '/images/Lady2.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Demo Info'
  }
]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Itemcard attr={info[0]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[1]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[2]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[3]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[4]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[5]}></Itemcard>
        </Grid>
      </Grid>
    </div>
  );
}
