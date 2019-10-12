import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia, Grid, MuiThemeProvider } from "@material-ui/core";
import Axios from "axios";
import { public_key, api_url, ts, hash } from "../Api";
import Pagination from "material-ui-flat-pagination";
import {theme} from '../CommonStyles';
import CharactersComicsModal from "./CharactersComicsModal";

const styles = theme => ({

    layoutBody: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 10,
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        position: 'relative',
        overflowX: 'auto',
        paddingBottom: 10,
        marginBottom: 10
    },
    card: {
        width: 200,
        height: 320,
        cursor: 'pointer'
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    name: {
        marginLeft: 20,
        fontSize: 26,
    },
    link: {
        textDecoration: 'none'
    },
    pagination: {
        color: '#000'
    }
  });

  
class CharactersComics extends Component{

    state = {
        comics: [],
        offset: 0,
        total: 0,
        open: false,
        id: ''
    }

    componentDidMount(){
        this.search();
    }

    search = () => {

        Axios.get(`${api_url}/characters/${this.props.characterId}/comics?apikey=${public_key}&ts=${ts}&hash=${hash}&limit=4&offset=${this.state.offset}`)
        .then(res => {
            this.setState({comics: res.data.data.results,
                            total: res.data.data.total})
        }).catch((error) => {
            console.log(error);
        })
    }

    handleClick = offset => {
        this.setState({offset: offset, id: ''}, () => this.search())
    }

    handleModalOpen = id => {
        this.setState({ open: true, id: id });
    };

    
    render(){
        const { classes } = this.props;
        return(
            
            <div className={classes.layoutBody}>
                { !this.state.total ? '' :
                <div>
                <Typography variant="h4" gutterBottom style={{fontWeight: 'bold'}}>
                    HQs
                </Typography>
                <Grid container spacing={24} className={classes.gridContainer}>
                    {this.state.comics.map(row => 
                        <Grid item  key={row.id} xs={12} sm={12}>
                            <Card onClick={() => this.handleModalOpen(row.id)} className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={`${row.thumbnail.path}/portrait_uncanny.${row.thumbnail.extension}`}
                                    title={classes.title}
                                    />
                                <CardContent className={classes.cardContent}>
                                    <div>
                                        <Typography className={classes.title}>
                                            {row.title}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                            <CharactersComicsModal character={row} id={this.state.id} open={this.state.open}/>
                        </Grid>
                    )}
                </Grid>

                <MuiThemeProvider theme={theme}>
                        <Pagination
                        limit={4}
                        offset={this.state.offset}
                        total={this.state.total}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </MuiThemeProvider>

                </div>
                }
            </div>
        )

    }

}

CharactersComics.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(CharactersComics);