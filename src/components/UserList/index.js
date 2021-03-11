import React, { Fragment, Component} from "react";
import { Row, Col } from 'react-materialize';
import UserInfo from './../UserInfo'
class  UserList extends Component{

    render(){
        return this.props.rows.map((row, i) => 
            <Row key={i}>
                {row.map((user, i) =>
                    <Col s={4} key={i}>
                        {user ? <UserInfo {...user} currentUserId={this.props.currentUserId} /> : <Fragment></Fragment>}
                    </Col>
                )}
            </Row> 
        )
    }

}

export default UserList;