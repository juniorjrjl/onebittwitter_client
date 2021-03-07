import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserInfoContainer extends Component {
	constructor(props) {
		super(props);
	}
 
	render() {
		return (
    		<UserInfo {...this.props.user} currentUserId={this.props.current_user_id}/>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		user: state.user,
		current_user_id: state.current_user.id
	}
};
   
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ }, dispatch)
}
   
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)