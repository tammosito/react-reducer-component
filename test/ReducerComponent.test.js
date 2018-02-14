import React from "react";
import ReducerProvider from "../src/index";
import renderer from "react-test-renderer";

const INC_COUNTER = "INC_COUNTER";
const incCounter = () => {
	return {
		type: INC_COUNTER
	};
};

const reducer = (state = {}, action) => {
	if (action.type === INC_COUNTER) {
		return {
			...state,
			count: state.count + 1
		};
	} else return state;
};

const initialState = {
	count: 0
};

test("Render without errors", () => {
	const component = renderer.create(
		<ReducerProvider
			initialState={initialState}
			reducer={reducer}
			render={(reduce, props) => (
				<button onClick={() => reduce(incCounter())}>
					{props.count}
				</button>
			)}
		/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test("Should reduce state properly", () => {
	const component = renderer.create(
		<ReducerProvider
			initialState={initialState}
			reducer={reducer}
			render={(reduce, props) => (
				<button onClick={() => reduce(incCounter())}>
					{props.count}
				</button>
			)}
		/>
	);

	let tree = component.toJSON();
	// trigger reduce to update state
	tree.children[0].props.onClick();

	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
