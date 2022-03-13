import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../../input/Input";
import "../forms.css";

const ContactForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

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
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Este campo no puede estar vacio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Por favor, ingrese un email valido.",
                },
              }}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <Input
                  {...field}
                  className="form__input"
                  error={errors.email}
                  id="form__email"
                  label="E-mail"
                  placeholder="Ingrese su email..."
                  type="text"
                />
              )}
            />
            <Controller
              name="fullName"
              control={control}
              rules={{
                required: "Este campo no puede estar vacio",
              }}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <Input
                  {...field}
                  className="form__input"
                  error={errors.fullName}
                  id="form__name"
                  label="Nombre Completo"
                  placeholder="Ingrese su nombre completo..."
                  type="text"
                />
              )}
            />
          </div>
          <div className="form__section-message">
            <Controller
              name="msg"
              control={control}
              rules={{ required: "Este campo no puede estar vacio" }}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <Input
                  {...field}
                  className="form__textarea"
                  error={errors.msg}
                  id="textarea"
                  label="Mensaje"
                  placeholder="Ingrese su mensaje..."
                  textArea
                />
              )}
            />
          </div>
          <button type="submit" className="form__btn">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
