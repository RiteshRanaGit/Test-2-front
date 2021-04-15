import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import PropTypes from "prop-types";
import TextFieldGroup from '../common/TextFieldGroup';
//import { DatePicker } from 'react-bootstrap-date-picker';
//import SelectListGroup from '../common/SelectListGroup';
import './CreateTodo.css';
//import { DateRangePicker } from 'react-bootstrap-daterangepicker';
//var DatePicker = require("react-bootstrap-date-picker");
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup'

import {createToDo} from '../../actions/todoAction';


class CreateToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            todoTitle: '',
            
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const todoData = {
            todoTitle: this.state.todoTitle
        }

        this.props.createToDo(todoData, this.props.history )
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        
        const { errors } = this.state;

        // select options for year
       
        
    
        return(
            <div className="create-todo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 m-auto">
                            <h1 className="diplay-4 text-center">Creat a TO DO Task</h1>
                            <p className="lead text-center">
                                let's get started
                            </p>
                            {/* <small className="d-block pd-3">* = Required field</small> */}

                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="To Do"
                                    name="todoTitle"
                                    value={this.state.todoTitle}
                                    onChange={this.onChange}
                                    error={errors.todoTitle}  
                                />
                               
                                
                                {errors.todo && <div className="text-danger" >{errors.todo}</div> }  
                            
                                
                                
                                    
                                <input type="submit" value="Submit" className="submitBtn btn btn-info btn-block mt-4" /> 
                            </form>
                       
                        </div>  
                    </div>
                </div>
            </div>
           
        )
        
  }
}

CreateToDo.propTypes = {
    
    createToDo: PropTypes.func.isRequired,
   
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    
    todo: state.todo,
    errors: state.errors
})

export default connect(mapStateToProps, { createToDo })(CreateToDo);  