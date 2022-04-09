import { TOGGLE_MENU_HIDDEN, TOGGLE_FILTER_HIDDEN } from "./menu-actions";

const INITIAL_STATE = {
  activeMenu: false,
  activeFilterBar: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        activeMenu: !state.activeMenu,
        activeFilterBar: state.activeFilterBar
          ? !state.activeFilterBar
          : state.activeFilterBar,
      };
    case TOGGLE_FILTER_HIDDEN:
      return {
        ...state,
        activeMenu: state.activeMenu ? !state.activeMenu : state.activeMenu,
        activeFilterBar: !state.activeFilterBar,
      };

    default:
      return state;
  }
};

export default menuReducer;
