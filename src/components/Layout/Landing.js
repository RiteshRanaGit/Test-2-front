import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CreateTodo from '../createtodo/CreateToDo';


class Landing extends  Component {

    componentDidMount(){
        // if(this.props.auth.isAuthenticated ){
        //   this.props.history.push('/dashboard');
        // }
        // else {
        //     this.props.history.push('/');
          
        // }
      }

    render(){
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">Excellence Technosoft Pvt Ltd
                        </h1>
                        <p className="lead">Test </p>
                        <hr />
                        
                        <Link to="/CreateTodo" className="btn btn-lg btn-info mr-2">Creat Todo work</Link>
                        <Link to="/Dashboard" className="btn btn-lg btn-info mr-2">Display Todo work</Link>

                    </div>
                    </div>
                </div>
                </div>
            </div>
          )
    }
  
}

Landing.propTypes ={
    
}

const mapStateToProps = (state) => ({
   
});

export default connect( mapStateToProps ) (Landing);