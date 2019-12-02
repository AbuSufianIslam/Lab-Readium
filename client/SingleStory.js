import React from 'react';
import axios from 'axios';
import Comments from './Comments';

export default class SingleStory extends React.Component {
	constructor() {
		super();
		this.state = {
			story: {}
		};
	}
	async componentDidMount() {
		//const storyId = this.props.match.params.storyId;
		try {
			const response = await axios.get(`/api/stories/${this.props.match.params.storyId}`);
			//console.log('response', response.data);
			this.setState({ story: response.data });
		} catch (error) {
			console.error(error);
		}
	}
	render() {
		console.log('data', this.props.match.params);
		console.log('response', this.state);
		const story = this.state.story;
		const content = story.content || '';
		const comments = story.comments || [];
		return (
			<div id="single-story" className="column">
				<h1>{story.title}</h1>
				{content.split('\n').map((line, index) => <p key={index}>{line}</p>)}
				<h3>Responses:</h3>
				<Comments comments={comments} />
			</div>
		);
	}
}
