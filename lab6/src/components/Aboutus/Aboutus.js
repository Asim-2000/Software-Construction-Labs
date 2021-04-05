import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'auto 100px'
  },
  paper: {
    textAlign: 'center',
    backgroundColor: 'orange',
    marginTop: '1%',
    color: 'white'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <img
            style={{ width: "200px", paddingTop: "5px" }}
            src="images/logo2.jpg"
            alt={"Hello"}
          ></img>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ paddingTop: "1px" }} className={classes.paper}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
