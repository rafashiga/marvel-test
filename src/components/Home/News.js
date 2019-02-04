import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from '../LayoutBody';
import { Grid, Typography, Button } from '@material-ui/core';
import news01 from '../../assets/news/news01.jpg'
import news02 from '../../assets/news/news02.jpeg'
import news03 from '../../assets/news/news03.png'
import news04 from '../../assets/news/news04.png'
import CommonStyles from '../CommonStyles';

const styles = theme => ({
    layoutBody: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
    },
    image: {
        width: 300,
        padding: 10
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        height: 200,
        fontWeight: 'bold',
        borderBottom: 'solid 1px',
        borderBottomColor: '#d0d0d0',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            paddingTop: 20,
            minHeight:300
        },
    },
    category: {
        fontSize:13,
        fontWeight: 'bold',
        color: 'red'
    },
    title: {
        fontSize:18,
        fontWeight: 'bold'
    },
    date: {
        fontSize:12,
        fontWeight: 'bold',
        color: '#afafaf'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        ...CommonStyles.colors.primary
    }
});

function News(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.layoutBody} width="large">
        
        <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h4" style={{fontWeight: 'bold'}}>
                    NOTÍCIAS
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} >
                <div className={classes.item}>
                    <img src={news02} alt="news02" className={classes.image}/>
                    <div>
                        <Typography className={classes.category}>
                            HQ
                        </Typography>
                        <Typography className={classes.title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna.
                        </Typography>
                        <Typography className={classes.date}>
                            02/02/2019
                        </Typography>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={news01} alt="news01" className={classes.image}/>
                    <div>
                        <Typography className={classes.category}>
                            FILME
                        </Typography>
                        <Typography className={classes.title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna.
                        </Typography>
                        <Typography className={classes.date}>
                            02/02/2019
                        </Typography>
                    </div>
                </div>     
                <div className={classes.item}>
                    <img src={news03} alt="news03" className={classes.image}/>
                    <div>
                        <Typography className={classes.category}>
                            HQ
                        </Typography>
                        <Typography className={classes.title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna.
                        </Typography>
                        <Typography className={classes.date}>
                            02/02/2019
                        </Typography>
                    </div>
                </div> 
                <div className={classes.item}>
                    <img src={news04} alt="news04" className={classes.image}/>
                    <div>
                        <Typography className={classes.category}>
                            TRAILER
                        </Typography>
                        <Typography className={classes.title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna.
                        </Typography>
                        <Typography className={classes.date}>
                            02/02/2019
                        </Typography>
                    </div>
                </div> 
                <div className={classes.buttonContainer}>
                    <Button className={classes.button}
                        variant="contained" color="primary">Ver mais</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} >
            
            </Grid>

        </Grid>
    </LayoutBody>
  )
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);