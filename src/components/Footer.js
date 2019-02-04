import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid, Link, Typography } from '@material-ui/core'
import LayoutBody from './LayoutBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 20,
        minHeight: 200,
        backgroundColor: '#333'
    },
    layoutBody: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#333',
        padding: 50
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
        '&:hover': {
            color: '#d0d0d0',
            textDecoration: 'none'
        }
    },
    link2: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 10,
        '&:hover': {
            color: '#d0d0d0',
            textDecoration: 'none'
        }
    },
    linkIcon: {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
        '&:hover': {
            color: '#d0d0d0',
            textDecoration: 'none'
        },
        marginRight: 30
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    iconContainer: {
        display:'flex',
        justifyContent: 'flex-start',
    },
    text: {
        display: 'flex',
        justifyContent: 'center'
    }
});

function Footer(props) {

    const {classes} = props;

    return (
        
        <div className={classes.root}>
            <LayoutBody width="large">
                <Grid container spacing={24} className={classes.layoutBody}>
                    <Grid item xs={12} sm={3} className={classes.item}>
                        <Link href="#/" className={classes.link}>
                            SOBRE A MARVEL
                        </Link>
                        <Link href="#/" className={classes.link}>
                            AJUDA/FAQS
                        </Link>
                        <Link href="#/" className={classes.link}>
                            CARREIRA
                        </Link>
                        <Link href="#/" className={classes.link}>
                            Link
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.item}>
                        <Link href="#/" className={classes.link2}>
                            PROPAGANDA
                        </Link>
                        <Link href="#/" className={classes.link2}>
                            MARVELHQ.COM
                        </Link>
                        <Link href="#/" className={classes.link2}>
                            REDEEM <br/>
                            DIGITAL COMICS
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.title}>
                            FOLLOW MARVEL
                        </Typography>
                        <Grid className={classes.iconContainer}>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </Link>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </Link>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </Link>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'youtube']} />
                            </Link>
                        </Grid>
                        <Grid className={classes.iconContainer}>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'snapchat']} />
                            </Link>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'tumblr']} />
                            </Link>
                            <Link href="#/" className={classes.linkIcon}>
                                <FontAwesomeIcon icon={['fab', 'pinterest']} />
                            </Link>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid item xs={12} sm={12} className={classes.text}>
                    <Typography className={classes.link}>
                        MARVEL © 2019
                    </Typography>
                </Grid>
            </LayoutBody>
        </div>
    )

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);