import React from "react";

const StateContext = React.createContext("react-reducer-component-state");
const Provider = StateContext.Provider;
const Consumer = StateContext.Consumer;


const ReducerConsumer = props => <Consumer>{context => props.render(context.reduce, context.state)}</Consumer>;

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
		return (
			<Provider value={{ reduce: this.reduce, state: this.state }}>
				{this.props.render(this.reduce, this.state)}
			</Provider>
		);
	}
}
