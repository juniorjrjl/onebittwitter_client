import React from "react";
import { Row, Col, Card, Icon, Dropdown, NavItem } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import InvisibleButton from '../../components/common/InvisibleButton';
import fake_avatar from '../../images/fake_avatar.png';
import moment from 'moment'
 
 
const Avatar = styled.img`
  width: 100%`
;
 
const TweetUnit = (props) => (
	<Card>
		<RowNoBottomMargin>
			<Col s={6} m={2} offset="s3">
    			<a href={`/user/${props.user.id}`}>
        			<Avatar src={(props.user.photo && props.user.photo.url) ? props.user.photo.url : fake_avatar } className="responsive-img circle" />
        		</a>
      		</Col>
    		<Col s={12} m={10}>
    			<RowNoBottomMargin>
          			<Col s={10} m={10}>
            			<b>{props.user.name}</b> <label style={{float: 'right'}}>posted at: {moment(props.created_at).fromNow()}</label>
          			</Col>
          			<Col s={2} m={2} className="right-align">
            			{ props.current_user.id === props.user.id &&
              			<Dropdown trigger={<InvisibleButton> <Icon>expand_more</Icon> </InvisibleButton>}>
                			<NavItem>
                  				<span className="grey-text text-darken-2">Edit</span>
                			</NavItem>
                			<NavItem onClick={() => props.deleteTweet(props.id)}>
                  				<span className="grey-text text-darken-2">Remove</span>
                			</NavItem>
              			</Dropdown>}
          			</Col>
        		</RowNoBottomMargin>
        		<Row>
          			<Col s={12} m={12}>
            			{props.body}like
          			</Col>
        		</Row>
        		<RowNoBottomMargin>
          			<Col s={1} m={1}>
            			<InvisibleButton onClick={() => props.likeTweet(props.id)} style={{display: !props.liked ? 'block' : 'none'}}>
              				<Icon className='black-text'>thumb_up</Icon>
            			</InvisibleButton>
						<InvisibleButton onClick={() => props.dislikeTweet(props.id)} style={{display: props.liked ? 'block' : 'none'}}>
              				<Icon className='blue-text'>thumb_up</Icon>
            			</InvisibleButton>
          			</Col>
          			<Col s={1} m={1}>
            			<InvisibleButton>
              				<Icon>repeat</Icon>
            			</InvisibleButton>
          			</Col>
        		</RowNoBottomMargin>
      		</Col>
    	</RowNoBottomMargin>
  	</Card>
);
 
export default TweetUnit;