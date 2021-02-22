import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';

class UserFollow extends Component {
    follow () {
        console.log('follow')
    }
        
    render() {
        return (
        <InvisibleButton onClick={this.follow}>
            <Icon small className="yellow-text text-darken-2">star</Icon>
        </InvisibleButton>
        );
    }
}

export default UserFollow;