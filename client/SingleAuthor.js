import React from 'react';
import axios from 'axios';
import Comments from './Comments';
import Stories from './Stories';
import { Route, Link } from 'react-router-dom';

export default class SingleAuthor extends React.Component {
	constructor() {
		super();
		this.state = {
			author: {},
			comments: [],
			stories: []
		};
	}

	async componentDidMount() {
		try {
			const authorId = this.props.match.params.authorId;
			const authorPath = `/api/authors/${authorId}`;
			const responses = await Promise.all([
				axios.get(authorPath),
				axios.get(`${authorPath}/comments`),
				axios.get(`${authorPath}/stories`)
			]);

			const [ author, comments, stories ] = responses.map((res) => res.data);
			this.setState({
				author,
				comments,
				stories
			});
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const { author, comments, stories } = this.state;
		return (
			<div id="single-author" className="column">
				<div id="single-author-detail" className="row">
					<div className="column mr1">
						<h1>{author.name}</h1>
						<p>{author.bio}</p>
					</div>
					<img src={author.imageUrl} />
				</div>
				<div id="single-author-nav">
					<Link to={`/authors/${author.id}}/comments`}>Comments</Link>
					<Link to={`/authors/${author.id}}/stories`}>Stories</Link>
				</div>
				<hr />
				<div>
					<Route path="/authors/:authorId/stories" render={() => <Stories stories={stories} />} />
					<Route path="/authors/:authorId/comments" render={() => <Comments comments={comments} />} />
				</div>
			</div>
		);
	}
}
