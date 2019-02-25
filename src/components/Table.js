import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default, 
    },
  },
});

class CustomizedTable extends Component {

  render() {
    let { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell id='title'>Title</CustomTableCell>
            <CustomTableCell id='desc' align="left">Description</CustomTableCell>
            <CustomTableCell id='options' align="left">Option</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.todos.map( (row, index) => (
            <TableRow className={classes.row} key={index}>
              <CustomTableCell component="th" scope="row">
                {row.title}
              </CustomTableCell>
              <CustomTableCell align="left">{row.desc}</CustomTableCell>
              <CustomTableCell align="left"> 
                <Button onClick={() => this.props.editHandler(row.desc)} variant="contained" color='primary' className='bt'>Edit</Button>
                <Button onClick={() => this.props.deletHandler(row.desc)} variant="contained" color='secondary'>Delete</Button>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
}


CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
