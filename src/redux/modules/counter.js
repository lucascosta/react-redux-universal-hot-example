import {connectMultireducer} from 'multireducer';

const INCREMENT = 'redux-example/counter/INCREMENT';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const {count} = state;
      return {
        count: count + 1
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function connector(Component) {
  return connectMultireducer(
    (key, state) => ({count: state.multireducer[key].count}),
    {increment}
  )(Component);
}
