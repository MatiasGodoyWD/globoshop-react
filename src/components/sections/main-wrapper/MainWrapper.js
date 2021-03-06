import React from "react";

import { useSelector } from "react-redux";
import ProductModal from "../../modals/ProductModal";

const MainWrapper = ({ children }) => {
  const modalState = useSelector((state) => state.modal.active);

  return (
    <main className="main" data-aos="fade-right">
      {children}
      {modalState && <ProductModal />}
    </main>
  );
};

export default MainWrapper;
