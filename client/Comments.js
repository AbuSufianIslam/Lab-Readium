import React from 'react';

const Comments = (props) => {
	const comments = props.comments || [];
	return (
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
		</div>
	);
};

export default Comments;
