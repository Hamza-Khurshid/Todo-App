import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './style.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Form extends React.Component {

  saveData = (e) => {
      e.preventDefault();

    let name = e.target.elements.itemname.value;
    let desc = e.target.elements.desc.value;
    let obj = {
      id: Math.random(),
      title: name,
      desc
    }

    this.props.saveDataTo(obj);
  }


  render() {
    const { classes } = this.props;

    return (
        <Paper elevation={5} className='paper-cls'>
        <form onSubmit={this.saveData} className={classes.container} noValidate autoComplete="off" className="form-class">

            <TextField
                fullWidth
                id="standard-full-width"
                name='itemname'
                label="Title"
                margin="normal"
            />

            <TextField
            fullWidth
                id="standard-full-width"
                name='desc'
                label="Description"
                margin="normal"
            />

            <Button type='submit' variant="outlined" color="primary" className='but'>Submit</Button>

      </form>

      </Paper>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
