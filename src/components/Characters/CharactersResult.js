import React from 'react'
import { CardContent, Card, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const styles = theme => ({

    layoutBody: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      position: 'relative',
      
    },
    card: {
        width: '100%',
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        marginLeft: 20,
        fontSize: 12,
        color: '#d0d0d0',
    },
    name: {
        marginLeft: 20,
        fontSize: 26,
        '&:hover': {
            color: '#c10000',
            textDecoration: 'none'
        }
    },
    link: {
        textDecoration: 'none'
    }
  });

function CharactersResult(props) {
    const { classes, character } = props;

    return (

        <Card key={character.id} className={classes.card}>
            <Link to={`characterDetail/${character.id}`} className={classes.link}>
            <CardContent className={classes.cardContent}>
                <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`} alt={character.name} />
                <div>
                    <Typography className={classes.title}>
                        PERSONAGEM
                    </Typography>
                    
                        <Typography className={classes.name}>
                            {character.name}
                        </Typography>
                </div>
            </CardContent>
            </Link>
        </Card>
        
    ) 
}

CharactersResult.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(CharactersResult);