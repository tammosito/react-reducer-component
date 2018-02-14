import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class ReducerProvider extends Component {
	static propTypes = {
		initialState: PropTypes.any.isRequired,
		reducer: PropTypes.func.isRequired,
		render: PropTypes.func.isRequired

	}

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
