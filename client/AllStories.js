import React from 'react';
import axios from 'axios';
import Stories from './Stories';

export default class AllStories extends React.Component {
	constructor() {
		super();
		this.state = {
			stories: []
		};
	}

	async componentDidMount() {
		try {
			const storiesResponse = await axios.get('/api/stories');
			this.setState({ stories: storiesResponse.data });
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const { stories } = this.state;
		return <Stories stories={stories} />;
	}
}
