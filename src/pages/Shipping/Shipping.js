import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import ShippingForm from "../../components/forms/Shipping/ShippingForm";
import LogosHeader from "../../components/headers/headers-components/LogosHeader";
import ProductModal from "../../components/modals/ProductModal";

const Shipping = () => {
  const modalState = useSelector((state) => state.modal.active);
  return (
    <>
      <header
        className="shipping__header"
        id="Shipping__header"
        data-aos="fade-right"
      >
        <LogosHeader />
      </header>
      <main className="main">
        <div className="cart__section" data-aos="fade-right">
          <h2 className="cart__title">Datos de la compra</h2>
          <ShippingForm />
        </div>
      </main>
      <Footer />
      {modalState && <ProductModal />}
    </>
  );
};

export default Shipping;
