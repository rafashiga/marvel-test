import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiToolbar from '@material-ui/core/Toolbar';

export const styles = theme => ({
  root: {
    minHeight: 40,
    height: 46,
    [theme.breakpoints.up('sm')]: {
        height: 20,
    }
  },
});

function Toolbar(props) {
  return <MuiToolbar {...props} />;
}

export default withStyles(styles)(Toolbar);