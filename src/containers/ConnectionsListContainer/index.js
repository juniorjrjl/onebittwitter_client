import React, { Fragment, Component} from "react";
import { Tabs, Tab } from 'react-materialize';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setUserInfo } from './../TimelineContainer/actions';
import UserList from '../../components/UserList'
import { bindActionCreators } from 'redux';

const CustomTab = styled(Tabs)`
        .tab a{
            color:#000;
        }
        .tab a:hover {
            background-color:#eee;
            color:#000;
        }
        .tab a.active {
            background-color:#eee;
            color:#000;
        }
        .indicator {
            background-color:#000;
        }
        .tab a:focus.active {
            background-color:#eee;
            color:#000;
        }
        `
;

let buildGridLayout = (users) =>{
    let line = [];
    let grid = [];
    users.forEach((user, i) => {
        line.push(user);
        if ((i % 3 === 0 && i !== 0) || i === users.length -1){
            grid.push(line.slice())
            line = [];
        }
    })
    let emptyElements = 3 - grid[grid.length -1].length
    if ( emptyElements !== 0){
        for (let i = 0; i < emptyElements; i++) {
            grid[grid.length -1].push(undefined);
        }
    }
    return grid
}

class ConnectionsListContainer extends Component{

    componentDidMount(){
        this.props.setUserInfo(this.props.current_user)
    }

    render(){
        let followings = this.props.current_user.followings;
        let followers = this.props.current_user.followers;
        let followingsGrid = buildGridLayout(followings);
        let followersGrid = buildGridLayout(followers);
        return <Fragment>
            <CustomTab className="tab-demo z-depth-1" options={{swipeable: true}}>
                <Tab options={{duration: 300,onShow: null,responsiveThreshold: Infinity,swipeable: false}} title="Followers">
                    <UserList rows={followersGrid} currentUserId={this.props.current_user.id}/>
                </Tab>
                <Tab active options={{duration: 300,onShow: null,responsiveThreshold: Infinity,swipeable: false}}title="Following">
                    <UserList rows={followingsGrid} currentUserId={this.props.current_user.id}/>
                </Tab>
            </CustomTab>
        </Fragment>
    }
}

function mapStateToProps(state) {
    return { current_user: state.current_user }
};
 
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setUserInfo }, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(ConnectionsListContainer);