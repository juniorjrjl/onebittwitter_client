import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics';
import photo from '../../images/fake_avatar.png';

class TrendingTopicsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hashtags: []
        };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API + '/trending')
        .then((response)=>{
            console.log(response.data.hashtags); 
            this.setState(()=>{
                return {
                    hashtags: response.data.hashtags
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <TrendingTopics hashtags={this.state.hashtags} />
            </div>
        );
    }
}

export default TrendingTopicsContainer;