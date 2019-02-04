import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, Typography } from "@material-ui/core";

const styles = theme => ({

   
});

  
class CharactersComicsModal extends Component{

    state = {
        open: false,
        fullWidth: true,
        maxWidth: 'xs',
        id: ''
    };

    componentWillReceiveProps(props){
        this.setState({open: props.open, id: props.id})
    }

    handleClose = () => {
        this.setState({ id: '' });
    };

    render(){
        const {character} = this.props

        return(
            <Dialog
                fullWidth={this.state.fullWidth}
                maxWidth={this.state.maxWidth}
                open={this.state.id === character.id ? true: false}
                onClose={this.handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <Typography variant="h5" gutterBottom>
                        {character.title}
                    </Typography>
                    <Typography>
                        {character.description}
                    </Typography>
                </DialogContent>
            </Dialog>

        )
    }

}

CharactersComicsModal.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(CharactersComicsModal);