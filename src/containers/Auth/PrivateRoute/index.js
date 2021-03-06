import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../actions';

class PrivateRoute extends React.Component {
    componentDidMount(){
        if(localStorage.jwt){
            this.props.getCurrentUser();
        }
    }

    render() {
        const {component: Component, ...rest} = this.props;
            let redirect = <Redirect to={{pathname: '/login'}} />
            if (localStorage.jwt){
                redirect = rest.current_user.id ? <Component {...rest} /> : redirect = 'Loading...';
            } 
            return (
                <Route {...rest} render={props => (redirect)} />
            );
        }

}

function mapStateToProps(state) {
    return {
        current_user: state.current_user
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCurrentUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)