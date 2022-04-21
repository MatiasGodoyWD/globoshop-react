import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/modal/modal-actions";

const ProductModal = ({ message }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  console.log(modal.modalState);
  const changeModalState = (state) => {
    dispatch(toggleModal(state));
  };

  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      changeModalState("");
    }, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.active]);

  return (
    <>
      {modal.modalState === null && (
        <div className={`product__message product__message-error`}>
          {message}
        </div>
      )}
      {modal.modalState !== null && (
        <div className={`product__message product__message-success`}>
          {message}
        </div>
      )}
    </>
  );
};

export default ProductModal;
