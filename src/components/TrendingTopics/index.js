import React from "react";
import styled from 'styled-components';
import Hashtag from '../../components/Hashtag';

const CardContentTreding = styled.div`
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-radius: 0 0 0px 0px !important;
`;

const CardTitle = styled.p`
    font-size: 18px;
    color: white;
`;

const TrendingTopics = (props) => (
    <div className="card">
        <CardContentTreding className="card-content grey darken-2">
            <CardTitle className="white-text">Trending Topics</CardTitle>
        </CardContentTreding>
        <div className="card-content">
            {props.hashtags.map((hashtag, i) =>
            <Hashtag title={hashtag[0]} count={hashtag[1]} key={i} />)}
        </div>
    </div>
);

export default TrendingTopics;