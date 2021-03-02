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
        return (
            localStorage.jwt ? 
                (this.props.current_user.id ? 
                    (<Route {...this.props}> </Route> ) : 
                    'Loading...'):
                (<Redirect to={{pathname: "/",state: { from: this.props.location }}}/>)
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