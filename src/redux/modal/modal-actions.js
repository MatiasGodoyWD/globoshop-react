export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const toggleModal = (size, message) => ({
  type: TOGGLE_MODAL,
  size: size,
  message: message,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
