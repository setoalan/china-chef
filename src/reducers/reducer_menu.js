import { FETCH_MENU } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_MENU:
    return { ...state, all: action.payload.data }
  default:
    return state;
  }
}
