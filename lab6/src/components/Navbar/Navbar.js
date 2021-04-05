import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="static">
        <Toolbar style={{ 'paddingLeft': '0px' }}>
          <img style={{ 'width': '105px', 'backgroundColor': 'white' }} src="images/logo2.jpg" alt={'Hello'}></img>
          
          <Typography style={{'color': 'black', 'maxWidth': '330px','marginRight':'60%', 'border': '1px solid black', 'borderLeftStyle': 'none', 'borderRadius': '0px 10px 10px 0px', 'backgroundColor':'white', 'paddingLeft':'60px'}} 
          variant="h6" className={classes.title}>
            DevCreatives
          </Typography>

          <Button color="inherit">Menu</Button>
          <Button href='#aboutus' color="inherit">About Us</Button>
          <Button href='#whatwedo' color="inherit">Our Work</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
