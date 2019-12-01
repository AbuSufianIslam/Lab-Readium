import React from 'react';
import axios from 'axios';

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
				<div id="comments">
					{comments.map((comment) => {
						return (
							<div className="comment row" key={comment.id}>
								<img src={comment.author.imageUrl} />
								<div className="column">
									<a>
										<h5>{comment.author.name}</h5>
									</a>
									<div>{comment.content}</div>
								</div>
							</div>
						);
					})}

					{/* <div className="comment row">
						<img src="COMMENT_1_AUTHOR_IMAGE_URL" />
						<div className="column">
							{comments.map((comment) => {
								return (
									<div className="comment row">
										<img src={comment.author.imageUrl} />
										<div className="column">
											<a>
												
												<h5>{comment.author.name}</h5>
											</a>
											<div>{comment.content}</div>
										</div>
									</div>
								);
							})}
							<a>
								
								<h5>author name</h5>
							</a>
							
							<div>content</div>
						</div>
					</div>
					<div className="comment row">
						<img src="COMMENT_2_AUTHOR_IMAGE_URL" />
						<div className="column">
							<a>
								<h5>COMMENT_2_AUTHOR_NAME</h5>
							</a>
							<div>COMMENT_2_CONTENT</div>
						</div>
					</div> */}
				</div>
			</div>
		);
	}
}
