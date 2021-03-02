import React, { Component } from 'react';
import ProfileEdit from '../../components/ProfileEdit'
import { updateUserInfo, updateUserPassword, updateImagePreview } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfileEditContainer extends Component {

    constructor() {
        super()
        this.updateProfile = this.updateProfile.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.encodeFile = this.encodeFile.bind(this)
        this.getBase64 = this.getBase64.bind(this)
    }

    updateProfile(values){
        var new_values = {...values};
        new_values.photo = this.props.image_preview;
        this.props.updateUserInfo(new_values)
    } 

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            window.Materialize.toast('Problem in photo update', 4000, 'red')
        };
    }

    updatePassword(values){
        this.props.updateUserPassword(values)
    }
    
    encodeFile(e){
        this.getBase64(e.target.files[0], (result) => {
            this.props.updateImagePreview(result)
        });
    }

    render() {
        return (
            <ProfileEdit updateProfile={this.updateProfile} updatePassword={this.updatePassword} {...this.props.current_user}/>
        );
    }
}

function mapStateToProps(state) {
    return { 
        current_user: state.current_user,
        image_preview: state.image_preview
    }
};
   
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateUserInfo, updateUserPassword, updateImagePreview }, dispatch)
}
   
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditContainer)