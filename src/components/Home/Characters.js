import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LayoutBody from "../LayoutBody";
import { Card, CardContent, Typography, CardMedia, Grid } from "@material-ui/core";
import Axios from "axios";
import { public_key } from "../Api";
import { Link } from "react-router-dom";

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
        paddingBottom: 20,
        paddingTop: 10
    },
    card: {
        width: 130,
        height: 230,
        background: '#333',
        '&:hover': {
            background: '#c10000'
        }
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    name: {
        marginLeft: 20,
        fontSize: 26,
    },
    link: {
        textDecoration: 'none',
    },
  });

class Characters extends Component{

    state = {
        comics: [],
        total: 0
    }

    componentDidMount(){
        this.search();
    }

    search = () => {
        Axios.get(`http://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=5&apikey=${public_key}`)
        .then(res => {
            this.setState({
                comics: res.data.data.results,
                total: res.data.data.total
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    
    render(){
        const { classes } = this.props;
        return(
            <LayoutBody className={classes.layoutBody} width="large">

                <Typography variant="h4" gutterBottom style={{fontWeight: 'bold'}}>
                    PERSONAGENS
                </Typography>
                <Grid container spacing={24} className={classes.gridContainer}>
                    { !this.state.total ? 'Carregando...' : 
                    this.state.comics.map(row => 
                        <Grid  key={row.id} item xs={12} sm={12}>
                            <Link  to={`characterDetail/${row.id}`} className={classes.link}>
                                    <Card  className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            image={`${row.thumbnail.path}/standard_xlarge.${row.thumbnail.extension}`}
                                            title={row.name}
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <div>
                                                    <Typography className={classes.title}>
                                                        {row.name}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                    </Card>
                            </Link>
                        </Grid>
                    )}
                </Grid>
            </LayoutBody>
        )

    }

}

Characters.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Characters);