import React from "react";
import { render } from "react-dom";
import ReducerProvider from "react-reducer-component";

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

const Counter = ({ reduce, count }) => (
  <button onClick={() => reduce(incCounter())}>{count}</button>
);

const App = () => (
  <div>
    <h2>ReducerComponent {"\u2728"}</h2>
    <ReducerProvider initialState={initialState} reducer={reducer}>
      {(reduce, props) => {
        return (
          <div>
            <Counter reduce={reduce} count={props.count} />
          </div>
        );
      }}
    </ReducerProvider>
    <ReducerProvider initialState={initialState} reducer={reducer}>
      {(reduce, props) => {
        // you can use it for shared state too!
        return (
          <div>
            <Counter reduce={reduce} count={props.count} />
            <Counter reduce={reduce} count={props.count} />
          </div>
        );
      }}
    </ReducerProvider>
  </div>
);

render(<App />, document.getElementById("root"));
