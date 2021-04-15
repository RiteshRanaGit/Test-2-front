import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import './Navbar.css';
import Logo1 from '../../img/testi-02.jpg';
import { DropdownButton, Dropdown } from 'react-bootstrap';
//import { Home } from '../common/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarAlt, faPowerOff, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
//import { fashome } from '@fortawesome/free-solid-svg-icons';
//import { logoutUser } from '../../actions/authActions';
//import { clearCurrentClassroom } from '../../actions/classroomAction';


class Navbar extends Component {

    onLogoutClick(e) {
        // e.preventDefault();
        // this.props.clearCurrentClassroom();
        //  this.props.logoutUser();
    }

    render(){

        

        return (
            
                <div>
                   
                        <nav className="navbar navbar-expand-sm navbar-dark bg-primary justify-content-center mb-4">
                            <div className="container">
                            <Link className="navbar-brand" to="/">Ritesh</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            
                            </div>
                        </nav>
                        
                        
                
                </div>
          )
    }
}

Navbar.propTypes = {


}

const mapStateToProps = (state) => ({
    
});


export default connect( mapStateToProps, {}) (Navbar);
