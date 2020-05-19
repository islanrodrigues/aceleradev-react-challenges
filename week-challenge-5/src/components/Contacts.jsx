import React from "react";

class Contacts extends React.Component {

	render() {
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					{this.props.children}
				</section>
			</div>
		);
	}
}

export default Contacts;
