import React from "react";

export default class ReducerProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.initialState;
		this.reducer = this.props.reducer;
	}

	reduce = action => {
		const nextState = this.reducer(this.state, action);
		this.setState(nextState);
	};

	render() {
		return <div>{this.props.render(this.reduce, this.state)}</div>;
	}
}
