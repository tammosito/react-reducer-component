react-reducer-component
=======================
_A tiny state management library using render props for react_

[![npm](https://img.shields.io/npm/v/react-reducer-component.svg)](https://npm.im/react-reducer-component)
[![CircleCI](https://circleci.com/gh/tiammosito/react-reducer-component/tree/master.svg?style=shield)](https://circleci.com/gh/tiammosito/react-reducer-component/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/tiammosito/react-reducer-component.svg)](https://greenkeeper.io/)

This is a implementation of the Reducer-Component pattern using render props.

## Installation
Add react-reducer-component to your project.
```bash
yarn add react-reducer-component
```
```bash
npm i react-reducer-component --save
```

## Usage
Import react-reducer-component
```js
import ReducerProvider from "react-reducer-component";
```
Wrap your components in a ReducerProvider
```jsx
<ReducerProvider
  initialState={initialState}
  reducer={reducer}
  render={(reduce, props) => {
		return (
			<div>
				<CustomCounter reduce={reduce} count={props.count} />
			</div>
		);
	}}/>
```

Define your `initialState`, `reducer` und `actions` redux-style like so:

```jsx
const initialState = {
  count: 0
};


const reducer = (state = {}, action) => {
  if (action.type === INC_COUNTER) {
    return {
      ...state,
      count: state.count + 1
    };
  } else return state;
};

// simple example action
const INC_COUNTER = "INC_COUNTER";
const incCounter = () => {
  return {
    type: INC_COUNTER
  };
};
```

Use the provided `reduce()` function to update your state:
```jsx
const CustomCounter = ({ reduce, count }) => (
  <button onClick={() => reduce(incCounter())}>{count}</button>
);
```
## Full example
You can see a full example in `example/`
