import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unfollowUser }  from './actions.js';


class UserUnFollow extends Component {

    constructor(){
        super();
        this.unfollowUser = this.unfollowUser.bind(this)
    }

    unfollowUser () {
        this.props.unfollowUser(this.props.user_id)
    }

    render() {
        return (
            <InvisibleButton onClick={this.unfollowUser}>
                <Icon small className="yellow-text text-darken-2">star_border</Icon>
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
	return bindActionCreators({ unfollowUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUnFollow);