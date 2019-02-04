import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeroLayout from './HeroLayout';
import { Typography } from '@material-ui/core';


const styles = theme => ({
  background: {
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
        fontSize: 25,
        marginTop: 30
    },
  },
  subtitle: {
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
        fontSize: 17
    },
  }
});

function Hero(props) {
  const { classes } = props;

  const image = props.backgroundImage

  return (
    <HeroLayout backgroundClassName={classes.background} image={image}>

        <Typography color="inherit" className={classes.title}
        align="left" variant="h3" marked="center">
          {props.title}
        </Typography>
        <Typography color="inherit" className={classes.subtitle}
        align="left" variant="h3" marked="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra.
        </Typography>

    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);