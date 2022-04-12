import React from "react";
import Footer from "../../components/footer/Footer";
import ShippingForm from "../../components/forms/Shipping/ShippingForm";
import LogosHeader from "../../components/headers/headers-components/LogosHeader";
import MainWrapper from "../../components/sections/main-wrapper/MainWrapper";
import SuccessModal from "../../components/success-modal/SuccessModal";

const Shipping = () => {
  return (
    <>
      <SuccessModal />
      <header
        className="shipping__header"
        id="Shipping__header"
        data-aos="fade-right"
      >
        <LogosHeader />
      </header>
      <MainWrapper>
        <div className="cart__section" data-aos="fade-right">
          <h2 className="cart__title">Datos de la compra</h2>
          <ShippingForm />
        </div>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Shipping;
