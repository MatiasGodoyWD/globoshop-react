import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../input/Input";
import "../forms.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../helpers/schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [isValid, setIsValid] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsValid(true);
    reset({ email: "", fullName: "", msg: "" });
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
      <section className="contact__section" id="contact__section">
        <form
          className="contact__form"
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="form__title">Contacto</h2>
          <div className="form__section-data">
            <Input
              control={control}
              name="email"
              className="form__input"
              error={errors.email}
              id="form__email"
              label="E-mail"
              placeholder="Ingrese su email..."
              type="text"
            />
            <Input
              control={control}
              name="fullName"
              className="form__input"
              error={errors.fullName}
              id="form__name"
              label="Nombre Completo"
              placeholder="Ingrese su nombre completo..."
              type="text"
            />
          </div>
          <div className="form__section-message">
            <Input
              control={control}
              name="msg"
              className="form__textarea"
              error={errors.msg}
              id="textarea"
              label="Mensaje"
              placeholder="Ingrese su mensaje..."
              textArea
            />
          </div>
          <button type="submit" className="form__btn">
            Enviar
          </button>
          {isValid && (
            <span id="form__confirmation" className="form__confirmation">
              <FontAwesomeIcon icon={faCheck} />
              Su mensaje se ha enviado con exito
            </span>
          )}
        </form>
      </section>
    </>
  );
};

export default ContactForm;
