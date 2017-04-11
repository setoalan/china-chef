import { FETCH_MENU } from '../actions/index';

const INITIAL_STATE = {
  all: {
    appetizers: [],
    soup: [],
    seafood: [],
    beef: [],
    lo_mein: [],
    chicken: [],
    pork: [],
    vegetable: [],
    fried_rice: [],
    chop_suey: [],
    egg_foo_young: [],
    chefs_house_special: [],
    combination_plate: [],
    lunch_special: [],
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
