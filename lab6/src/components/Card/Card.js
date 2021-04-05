import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

  title: {
    textAlign: 'right',
    fontSize: 14,
  },

  pos: {
    textAlign: 'right',
    marginBottom: 12,
  },

  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
    margin: '0 2px',
  },

  root: {
    width: 500,
    borderTop:'none',
    borderRadius: '0px 0px 30px 30px',
    backgroundColor: 'orange',
    margin: '0px auto',
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h2 style={{'textAlign':'center', 'color':'white'}}>Welcome to Creatives Club</h2>
        </Typography>
      </CardContent>
    </Card>
  );
}
