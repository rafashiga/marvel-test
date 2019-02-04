import React from 'react'
import { 
    CardContent, 
    Card, 
    Typography, 
    withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    card: {
        width: '100%',
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            paddingBottom: 20,
            paddingTop: 20,
            minHeight:300
        },
    },
    title: {
        marginLeft: 20,
        fontSize: 12,
        color: '#d0d0d0'
    },
    name: {
        marginLeft: 20,
        fontSize: 26,
    },
    description: {
        marginLeft: 20,
        fontSize: 16,
        textAlign: 'justify'
    },
  });

function CharactersAbout(props) {

    const { classes, character } = props;
    
    return (
     
            <Card key={character.id} className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <img src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`} alt={character.name} />
                    <div>
                        <Typography className={classes.name}>
                            {character.name}
                        </Typography>
                        <Typography className={classes.description}>
                            {character.description}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
    


    ) 
    
}

CharactersAbout.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(CharactersAbout);