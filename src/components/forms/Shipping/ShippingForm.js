import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../input/Input";
import "./shipping.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { shippingSchema } from "../../../helpers/schema";
import ProductsTable from "../../productsTable/ProductsTable";

const ShippingForm = () => {
  const [isValid, setIsValid] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(shippingSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsValid(true);
    reset({ email: "", name: "", surname: "", adress: "" });
  };

  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      setIsValid(false);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [isValid]);
  return (
    <>
      <form
        className="shipping__form"
        name="shipping"
        data-aos="fade-right"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__personal-data">
          <Input
            control={control}
            name="name"
            className="form__input"
            labelClass="form__label-black"
            errorClass="shippingForm__error"
            error={errors.name}
            id="form__name"
            label="Nombre"
            placeholder="Ingrese su nombre..."
            type="text"
          />
          <Input
            control={control}
            name="surname"
            className="form__input"
            labelClass="form__label-black"
            errorClass="shippingForm__error"
            error={errors.surname}
            id="form__surname"
            label="Apellido"
            placeholder="Ingrese su apellido..."
            type="text"
          />
          <Input
            control={control}
            name="email"
            className="form__input"
            labelClass="form__label-black"
            errorClass="shippingForm__error"
            error={errors.email}
            id="form__email"
            label="E-mail"
            placeholder="Ingrese su email..."
            type="text"
          />
          <Input
            control={control}
            name="adress"
            className="form__input"
            labelClass="form__label-black"
            errorClass="shippingForm__error"
            error={errors.adress}
            id="form__adress"
            label="Dirección"
            placeholder="Ingrese su dirección..."
            type="text"
          />
        </div>
        <div className="shipping__type">
          <p className="shipping__option">
            <input
              type="radio"
              id="home-shipping"
              name="shipping-type"
              value="500"
              checked
              readOnly
            />
            <label
              className="form__label-black radio-label"
              htmlFor="home-shipping"
            >
              Enviar al domicilio
            </label>
          </p>
          <p className="shipping__info">Llega entre 3 y 5 días habiles.</p>
        </div>
        <ProductsTable />
        <div className="shipping__payment">
          <p className="shipping__option">
            <input
              type="radio"
              id="pay-shipping"
              name="shipping-payment"
              value=""
              checked
              readOnly
            />
            <label
              className="form__label-black radio-label"
              htmlFor="pay-shipping"
            >
              Pagar con Mercado Pago
            </label>
          </p>
          <p className="shipping__info" id="pay-option">
            Su pago será realizado a traves de su cuenta de Mercado Pago.
          </p>
        </div>
        <div className="shipping__button-container">
          <button className="cart__button" type="submit">
            Finalizar compra
          </button>
        </div>
      </form>
    </>
  );
};

export default ShippingForm;
