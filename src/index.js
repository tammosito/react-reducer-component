import React from "react";

export default class ReducerProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.initialState;
		this.reducer = this.props.reducer;
	}

	reduce = action => {
		const newState = this.reducer(this.state, action);
		this.setState(newState);
	};

	render() {
		return <div>{this.props.children(this.reduce, this.state)}</div>;
	}
}
