export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const toggleModal = (size, message) => ({
  type: TOGGLE_MODAL,
  size: size,
  message: message,
});
