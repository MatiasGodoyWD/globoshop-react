import React from "react";
import Input from "../input/Input";
import "./forms.css";

const ContactForm = () => {
  return (
    <>
      <section className="contact__section" id="contact__section">
        <form className="contact__form" name="contact">
          <h2 className="form__title">Contacto</h2>
          <div className="form__section-data">
            <Input
              type="email"
              id="form__email"
              className="form__input"
              label="E-mail"
              placeholder="Ingrese su e-mail..."
            />
            <Input
              type="text"
              id="form__name"
              className="form__input"
              label="Nombre Completo"
              placeholder="Ingrese su nombre completo..."
            />
          </div>
          <div className="form__section-message">
            <Input
              textArea
              id="textarea"
              placeholder="Ingrese su mensaje..."
              className="form__textarea"
              label="Mensaje"
            />
          </div>
          <button type="submit" class="form__btn">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
