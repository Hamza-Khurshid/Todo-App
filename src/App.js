import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {hot} from 'react-hot-loader';
import Form from './components/Form';
import Table from './components/Table';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TitleBar from './components/TitleBar';
import EditForm from './components/EditForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: false,
      showForm: false,
      title: '',
      desc: '',
      todos: [ {
        title: 'JavaScript',
        desc: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
      }, {
        title: 'React',
        desc: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
      } ],
    };
  }

  onButtonClick = () => {
    this.setState( {
      showForm: !this.state.showForm
    } )
  }

  saveTodo = (todo) => {
    this.setState({ todos: this.state.todos.concat(todo) })
  }

  editTodo = (todoE) => {
    // console.log(todoE);
    let todoN = this.state.todos.filter( (todo) => todo.desc == todoE );
    // console.log(todoN);
    this.setState( {
      title: todoN.title,
      desc: todoN.desc,
      showEdit: true,
    } )
    console.log(this.state.title, this.state.desc);
  }

  deleteTodo = (todo) => {
    let newTodos = this.state.todos.filter( (item) => item.desc != todo );
    this.setState( {
      todos: newTodos
    } )
  }

  render() {
    
    return (
      <div className="App">
        <TitleBar />
        { this.state.showEdit ? 
          <EditForm editDataTo={this.editTodo} data1={this.state.title} data2={this.state.desc} />
          
        :  

        <Grid container className='conatiner-padd' >

        {this.state.showForm ? 
          <Grid item xs={12}>
            <Form saveDataTo={this.saveTodo}/>
          </Grid>

        : 
          
          <Grid item xs={12}>
            <Button onClick={this.onButtonClick} variant="outlined" color="primary" className='but'>Create Item</Button>
          </Grid>
        }

          <Grid item xs={12}>
            <Table todos={this.state.todos} editHandler={this.editTodo} deletHandler={this.deleteTodo} />
          </Grid>
           
        </Grid>
        }
      </div>
    );
  }
}

export default hot(module)(App);
