import React, {Component} from 'react';

class Dinosaur extends Component {
	render() {
		let nick = this.props.nickname || 'Earl';
		console.log(nick);
		return (
			<article>
				<h3 className='roar trex awesome'>Tony the T-Rex</h3>
				<p>Tony was once a baby T-Rex. His nickname is {nick}.
				Now he is top king of the food chain</p>
			</article>
		)
	}
};

export default Dinosaur;