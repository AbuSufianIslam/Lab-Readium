import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Author extends React.Component {
	constructor() {
		super();
		this.state = {
			authors: []
		};
	}

	async componentDidMount() {
		try {
			const { data } = await axios.get('/api/authors');
			this.setState({ authors: data });
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		console.log('response data', this.state);
		const { authors } = this.state;
		return (
			<div>
				{authors.map((author) => (
					<Link to={`/authors/${author.id}`} key={author.id}>
						<div className="author row">
							<img src={author.imageUrl} />
							<p>{author.name}</p>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
