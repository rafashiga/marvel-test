import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, MuiThemeProvider, Typography } from '@material-ui/core';
import Axios from 'axios';
import { public_key, api_url } from '../Api'
import CharactersResult from './CharactersResult';
import Pagination from "material-ui-flat-pagination";
import CommonStyles from '../CommonStyles';
import {theme} from '../CommonStyles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    buttonSearch: {
        ...CommonStyles.colors.primary
    },
    message: {
        padding: 20
    }
});

class Search extends Component {

    state = {
        search: '',
        characters: [],
        offset: 0,
        limit: 20,
        total: 0,
        showPagination: false,
        message: ''
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }

    search = () => {

        this.setState({message: 'Carregando...'});

        const search = this.state.search
        const offset = this.state.offset

        Axios.get(`${api_url}/characters?apikey=${public_key}&nameStartsWith=${search}&offset=${offset}`)
        .then(res => {
            this.setState({
                characters: res.data.data.results,
                total: res.data.data.total,
                message: ''
            }, () => 
                !this.state.total ? 
                this.setState({message: 'Nenhum resultado encontrado'}) : null
            )
        }).catch((error) => {
            console.log(error);
        })
    }

    handleClick = offset => {
        this.setState({offset: offset}, () => this.search())
    }

    handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault()
        this.search()
    }

    render(){

        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>   
                            <TextField
                                required
                                id="search" name="search"
                                label="Pesquisar" fullWidth
                                value={this.state.search}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>                        
                            <Button type="submit" className={classes.buttonSearch} 
                                variant="contained" color="primary">
                                Pesquisar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {
                    this.state.total ?
                    <Grid container spacing={24}>
                        {this.state.characters.map( row => (
                            <Grid key={row.id} item xs={12} sm={12}>      
                                <CharactersResult character={row}/>  
                            </Grid>
                        ))}
                        <Grid>
                            <Pagination
                                limit={20}
                                offset={this.state.offset}
                                total={this.state.total}
                                onClick={(e, offset) => this.handleClick(offset)}
                            />
                        </Grid>
                    </Grid>
                    :
                    <Typography className={classes.message}> 
                        {this.state.message} 
                    </Typography>
                }
            </div>
            </MuiThemeProvider>
        )
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Search);