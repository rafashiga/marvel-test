import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LayoutBody from "../LayoutBody";
import { Card, CardContent, Typography, CardMedia, Grid } from "@material-ui/core";
import Axios from "axios";
import { public_key, ts, hash, api_url } from "../Api";

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
        paddingBottom: 30
    },
    card: {
        width: 200,
        height: 320,
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
    }
  });

class HomeComics extends Component{

    state = {
        comics: [],
        total: 0
    }

    componentDidMount(){
        this.search();
    }

    search = () => {
        Axios.get(`${api_url}/comics?dateDescriptor=lastWeek&apikey=${public_key}&ts=${ts}&hash=${hash}`)
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
                    HQs
                </Typography>
                <Grid container spacing={24} className={classes.gridContainer}>
                { !this.state.total ? 'Carregando...' : 
                    this.state.comics.map(row => 
                    <Grid item  key={row.id} xs={12} sm={12}>
                        <Card  className={classes.card}>
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
                    </Grid>
                )}
                </Grid>
            </LayoutBody>
        )

    }

}

HomeComics.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(HomeComics);