import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

import {  Redirect} from 'react-router-dom';
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle, faAddressBook, faUnlockAlt, faCalendarAlt, faHeadset, faCogs, faTrophy } from '@fortawesome/free-solid-svg-icons';
//<span><FontAwesomeIcon icon={faInfoCircle} /></span>
import { getToDo } from '../../actions/todoAction';
import isEmpty from '../../validation/is-Empty';

//import Spinner from '../common/Spinner'

class Dashboard extends Component {
    componentDidMount(){
        this.props.getToDo();
        // this.props.getCurrentClassNotice(); 
    }
  //   componentWillMount(){
  //     this.props.getToDo();
  //     // this.props.getCurrentClassNotice(); 
  // }
   
  render() {
    var display;

    const { todo } = this.props.todo;

    if(!todo  || todo.length===0 || isEmpty(todo) ){
      display = 
                <div>
                        <Link to="/CreateTodo" className="btn btn-lg btn-info mr-2">Creat Todo work</Link>
                </div>
         
     
 } else{
    const list = todo.map(key =>(
        <tr key={key._id}>
            <td>{key.todoTitle}</td>
            
            
            {/* <td>
              <button  onClick={(e)=>this.handleDeleteOnClick(e, key._id)}  className="m-1 btn btn-danger" >Delete</button>
            </td> */}
        </tr>
        
    ));
     display =
    <div className="todolist">
        <h4 className="md-4">All Task</h4>
          <table className="table">
              <tr>
                  <th>List of To Do </th>
                  
                  {/* <th>Delete</th> */}
              </tr>
              <tbody>
                  {list}
              </tbody>
          </table>
    </div>
  }
   

    

    
    //const { Dashboard, loading } = this.props.Dashboard
    
    return (
      <div className='dashDiv'>
          <h1>Hello person </h1> 
          <div className='link'>
            <Link to="/CreateTodo" className="btn btn-lg btn-info mr-2">Create To Do task</Link>
          </div>
          {display}
      </div> 
         
    )
  }
}

Dashboard.prototypes = {
    getToDo: PropTypes.func.isRequired,
    
    

}

const mapStateProps = state => ({
    
    todo: state.todo,
    
})


export default connect(mapStateProps, { getToDo  }) (Dashboard); 