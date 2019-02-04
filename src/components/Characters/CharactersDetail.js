import React, { Component } from 'react'
import { Grid, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { public_key, api_url } from '../Api';
import LayoutBody from '../LayoutBody';
import CommonStyles from '../CommonStyles'
import CharactersComics from './CharactersComics';
import CharactersAbout from './CharactersAbout';

const styles = theme => ({

    layoutBody: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none'
    },
    buttonBack:{
        ...CommonStyles.colors.primary
    }
  });

class CharactersDetail extends Component {

    state = {
        character: [],
        total: 0
    }

    goBack = () =>{
        this.props.history.goBack();
    }
    

    componentDidMount(){
        window.scrollTo(0,0)

        Axios.get(`${api_url}/characters/${this.props.match.params.id}?apikey=${public_key}`)
        .then(res => {
            this.setState({character: res.data.data.results,
                            total: res.data.data.total})
        }).catch((error) => {
            console.log(error);
        })
    }

    render(){

        const { classes } = this.props;
        
        return (
            <LayoutBody className={classes.layoutBody} width="large">
                <Grid container spacing={24}>
                    { !this.state.total ? 'Carregando...' : 
                    this.state.character.map(row => (      
                        <CharactersAbout key={row.id} character={row} />
                    ))}
                    <Grid item xs={12} sm={12}>   
                        <CharactersComics characterId={this.props.match.params.id}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>   
                        <div className={classes.link}>
                            <Button onClick={this.goBack} variant="contained" color="primary" 
                                className={classes.buttonBack}
                            >Voltar</Button>
                        </div>
                    </Grid>                    
                </Grid>
            </LayoutBody>
        ) 
    }
}

CharactersDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(CharactersDetail);