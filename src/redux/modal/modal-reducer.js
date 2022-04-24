import { TOGGLE_MODAL } from "./modal-actions";
import { toggleModalState } from "./modal-utils";

const initialState = {
  active: false,
  modalState: "",
  message: "",
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        active: !state.active,
        modalState: toggleModalState(action.size),
        message: action.message,
      };

    default:
      return state;
  }
};

export default modalReducer;
