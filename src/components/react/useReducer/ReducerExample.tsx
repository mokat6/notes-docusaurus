import React, { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

/*
 * Take in the state, take in the action, make a copy of the state
 * Based on the action, do the hokey pokey, like in actionFunction
 * return the updated copy of the state. Don't mutate the OG state.
 * */

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;

      return { ...state, count: hasError ? state.count : newCount, error: hasError ? "Maximum reached" : null };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;

      return { ...state, count: hasError ? state.count : newCount, error: hasError ? "Minimum reached" : null };
    }

    default:
      return state;
  }
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div>
      {state.count}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <div className="flex gap-8 border">
        <button onClick={() => dispatch({ type: "increment" })}>increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      </div>
    </div>
  );
}

export default ReducerExample;
