import React from 'react'
import SignUp from '../../../components/Auth/SignUp'
import { register } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class SignUpContainer extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleSubmit(form) {
        this.props.register(form)
    }

    render() {
        return <SignUp handleSubmit={this.handleSubmit}/>
    }
}

function mapStateToProps(state) {
    return {}
};
   
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ register }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)