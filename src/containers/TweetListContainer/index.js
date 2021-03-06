import React, { Component, Fragment } from 'react';
import TweetUnit from '../../components/TweetUnit'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTweet, createTweet, editTweet, likeTweet, dislikeTweet } from './actions.js';
import TweetNew from '../../components/TweetNew'
 
 
class TweetListContainer extends Component {
 
	constructor() {
		super()
		this.deleteTweet = this.deleteTweet.bind(this)
    	this.postTweet = this.postTweet.bind(this)
		this.editTweet = this.editTweet.bind(this)
		this.likeTweet = this.likeTweet.bind(this)
		this.dislikeTweet = this.dislikeTweet.bind(this)
		this.enableEdit = this.enableEdit.bind(this)
		this.setEditText = this.setEditText.bind(this)
		this.setRetweet = this.setRetweet.bind(this)
		this.state = {
			editMode: -1,
			editText: undefined,
			retweetId: undefined,
			retweetBody: undefined
		}
  	}
 
  	deleteTweet(id){
    	this.props.deleteTweet(id)
  	}

	enableEdit(id, value){
		this.setState({editMode: id, editText: value})
	}

	disableEdit(){
		this.setState({editMode: -1, editText: undefined})
	}

	setEditText(value){
		this.setState({editText: value})
	}

	editTweet(id, event){
		if (event.keyCode === 13){
			this.props.editTweet(id, event.target.value)
			this.disableEdit()
		}
	}

  	postTweet(event, tweet_original_id){
    	if(event.keyCode === 13) {
      		this.props.createTweet(event.target.value, tweet_original_id)
      		event.target.value = ""
			  this.setState({retweetId: undefined, retweetBody: undefined})
    	}
  	}
 
	likeTweet(id){
		this.props.likeTweet(id)
	}

	dislikeTweet(id){
		this.props.dislikeTweet(id)
	}

	setRetweet(id, body){
		this.setState({retweetId: id, retweetBody: body})
	}

  	render() {
    	var tweet_list = this.props.tweets.length ? (this.props.tweets) : []
			console.table(tweet_list)
    		return (
      			<Fragment>
        			{this.props.current_user.id === this.props.user.id && 
						<TweetNew postTweet={this.postTweet} retweetId={this.state.retweetId} 
							retweetBody={this.state.retweetBody} setRetweet={this.setRetweet}/>
					}
        			{tweet_list.map((tweet, i) =>
          				<TweetUnit {...tweet} key={i} likeTweet={this.likeTweet} dislikeTweet={this.dislikeTweet}
						  enableEdit={this.enableEdit} editMode={this.state.editMode} editText={this.state.editText} 
						  setEditText={this.setEditText} setRetweet={this.setRetweet}
						  editTweet={this.editTweet} deleteTweet={this.deleteTweet} current_user={this.props.current_user}/>)}
      			</Fragment>
			);
  	}
}
 
function mapStateToProps(state) {
	return { 
    	tweets: state.tweets,
    	current_user: state.current_user,
    	user: state.user
  	}
};
 
function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ deleteTweet, createTweet, editTweet, likeTweet, dislikeTweet }, dispatch)
}
 
export default connect(mapStateToProps , mapDispatchToProps)(TweetListContainer)