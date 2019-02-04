import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from './Appbar';
import Toolbar, { styles as toolbarStyles } from './Toolbar';
import imageLogo from '../../assets/logo.png'

const styles = theme => ({
  title: {
    fontSize: 20,
    textDecoration: 'none',
    color: '#fff'
  },
  subtitle: {
    fontSize: 15,
    marginLeft: theme.spacing.unit * 3,
    textDecoration: 'none',
    color: '#fff'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'center',
    background: '#222',
    borderBottom: 'solid 1px',
    borderBottomColor: '#333'
  },
  toolbarSecond: {
    justifyContent: 'center',
    background: '#222',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  logo: {
    width: 100
  }
});

function Navbar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Link
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.title}
                to="/"
            >
                <img src={imageLogo} alt="logo" className={classes.logo}/>
            </Link>
        </Toolbar>
        <Toolbar className={classes.toolbarSecond}>
            <Link
                to="/"
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.subtitle}
            >
                {'INÍCIO'}
            </Link>
            <Link
                to="/characters"
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.subtitle}
                
            >
                {'PERSONAGENS'}
            </Link>
            <Link
                to="/"
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.subtitle}
                
            >
                {'HQ'}
            </Link>
            <Link
                to="/"
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.subtitle}
                
            >
                {'MAIS'}
            </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);