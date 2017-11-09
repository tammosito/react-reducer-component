react-reducer-component
=======================
[![npm](https://img.shields.io/npm/v/react-reducer-component.svg)](https://npm.im/react-reducer-component)
Implementation of the Reducer-Component pattern using RenderProps.

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
<ReducerProvider initialState={initialState} reducer={reducer}>
	{(reduce, props) => {
		return (
			<div>
				<CustomCounter reduce={reduce} count={props.count} />
			</div>
		);
	}}
</ReducerProvider>
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