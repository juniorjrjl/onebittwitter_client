import React from "react";
import { Row, Col, Card, Icon, TextInput } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import InvisibleButton from '../../components/common/InvisibleButton';
 
 
const TweetNew = (props) => (
    <Card>
        <Card style={{display: props.retweetId ? 'block' : 'none'}}>
            <Col s={12} m={12} className="right-align">
                <InvisibleButton onClick={() => props.setRetweet(undefined, undefined)}>
                    <Icon>close</Icon>
                </InvisibleButton>
            </Col>
            {props.retweetBody}
        </Card>
        <RowNoBottomMargin>
            <Col s={12}>
                <TextInput  s={12} maxLength="200" label="What are you thinking?" validate className="text-red" onKeyDown={(event) => props.postTweet(event, props.retweetId)}>
                    <Icon>send</Icon>
                </TextInput >
            </Col>
        </RowNoBottomMargin>
    </Card>
)
 
export default TweetNew;