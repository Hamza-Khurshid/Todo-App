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

class EditForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      desc: ''
    }

    // this.onChangeInput = this.onChangeInput.bind(this);
  }

  saveData = (e) => {
    e.preventDefault();

    let id = this.props.data3;
    let title = e.target.elements.itemname.value;
    let desc = e.target.elements.desc.value;

    let todo = {
      id,
      title,
      desc
    }

    // console.log(todo);
    this.props.editDataTo(todo);
  }

  componentDidMount() {
    this.setState( {
      title: this.props.data1,
      desc: this.props.data2
    } )
    // console.log(this.props)
  }

  onChangeInput = name => event => {
    this.setState( {
      [name]: event.target.value
    } )
  }

  render() {
    const { classes } = this.props;
    
    return (
        <Paper elevation={5} className='paper-cls'>
        <form onSubmit={this.saveData} className={classes.container} noValidate autoComplete="off" className="form-class">

            <TextField
                fullWidth
                refs="title"
                name='itemname'
                label="Title"
                margin="normal"
                value={this.state.title}
                onChange={this.onChangeInput('title')}
            />

            <TextField
            fullWidth
                refs="desc"
                name='desc'
                label="Description"
                margin="normal"
                value={this.state.desc}
                onChange={this.onChangeInput('desc')}
            />

            <Button type='submit' variant="outlined" color="primary" className='but'>Submit</Button>

      </form>

      </Paper>
    );
  }
}

EditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditForm);
