import React from "react";
import { Row, Col, Card, Icon, TextInput } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import InvisibleButton from '../../components/common/InvisibleButton';
 
 
const TweetNew = (props) => (
    <Card>
        <RowNoBottomMargin>
            <Col s={12}>
                <TextInput  s={12} maxLength="200" label="What are you thinking?" validate className="text-red" onKeyDown={(event) => props.postTweet(event)}>
                    <Icon>send</Icon>
                </TextInput >
            </Col>
        </RowNoBottomMargin>
    </Card>
)
 
export default TweetNew;