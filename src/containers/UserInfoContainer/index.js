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
    		<UserInfo {...this.props.user}/>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		user: state.user,
	}
};
   
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ }, dispatch)
}
   
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)