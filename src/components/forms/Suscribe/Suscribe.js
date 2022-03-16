import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { suscribeSchema } from "../../../helpers/schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import SuscribeInput from "../../input/SuscribeInput";
import "./suscribe.css";

const Suscribe = () => {
  const [isValid, setIsValid] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "suscribeSubmit",
    reValidateMode: "suscribeSubmit",
    resolver: yupResolver(suscribeSchema),
  });

  const suscribeSubmit = (data) => {
    console.log(data);
    setIsValid(true);
    reset({ suscribe: "" });
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
    <form
      className="subscribe__section"
      name="suscribe"
      onSubmit={handleSubmit(suscribeSubmit)}
    >
      <h2 className="slider__section__title">
        Suscribite y enterate de las últimas novedades
      </h2>
      <div className="suscribe__component">
        <SuscribeInput
          control={control}
          name="suscribe"
          className="subscribe__input"
          placeholder="Ingrese su email..."
          type="text"
        />

        <button type="submit" className="subscribe__btn">
          Suscribirse
        </button>
      </div>
      {isValid && (
        <span
          id="subscribe__confirmation"
          className="subscribe__confirmation-success"
        >
          <FontAwesomeIcon icon={faCheck} />
          Tu suscripción se ha realizado correctamente
        </span>
      )}
      {errors.suscribe && (
        <span
          id="subscribe__confirmation"
          className="subscribe__confirmation-fail"
        >
          <FontAwesomeIcon icon={faTimes} />
          {errors.suscribe.message}
        </span>
      )}
    </form>
  );
};

export default Suscribe;
