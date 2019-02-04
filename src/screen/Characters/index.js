import React, { Component } from 'react'
import Hero from '../../components/Hero';
import Search from '../../components/Characters/Search';
import PropTypes from 'prop-types';
import LayoutBody from '../../components/LayoutBody';
import { withStyles, Grid} from '@material-ui/core';
import backgroundImage from '../../assets/characters.jpg'


const styles = theme => ({

    layoutBody: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      position: 'relative',
      
    }
  });

class Characters extends Component{

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Hero title="PERSONAGENS" backgroundImage={backgroundImage}/>
                <LayoutBody className={classes.layoutBody} width="large">
                    <Grid container spacing={24}>
                        <Search />
                    </Grid>
                </LayoutBody>
            </div>
        )
    }

}

Characters.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Characters);