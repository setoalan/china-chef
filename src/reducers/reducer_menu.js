import { FETCH_MENU } from '../actions/index';

const INITIAL_STATE = {
  all: {
    appetizers: [],
    soups: [],
    seafoods: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_MENU:
    return { ...state, all: action.payload.data }
  default:
    return state;
  }
}
