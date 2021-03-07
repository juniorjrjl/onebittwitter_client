import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { followUser }  from './actions.js';

class UserFollow extends Component {

    constructor(){
        super();
        this.followUser = this.followUser.bind(this)
    }

    followUser () {
        this.props.followUser(this.props.user_id)
    }
        
    render() {
        return (
        <InvisibleButton onClick={this.followUser}>
            <Icon small className="yellow-text text-darken-2">star</Icon>
        </InvisibleButton>
        );
    }
}

function mapStateToProps(state, ownProps) {
	return { 
		user_id: state.user.id,
	}
};
   
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ followUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFollow);