import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo no puede estar vacío")
    .email("Por favor,ingrese un e-mail valido")
    .lowercase(),
  fullName: Yup.string()
    .required("Este campo no puede estar vacío")
    .lowercase()
    .trim()
    .transform((str) => str.replace(/ {2,}/g, " ")),
  msg: Yup.string()
    .required("Este campo no puede estar vacío")
    .lowercase()
    .trim(),
});

const suscribeSchema = Yup.object().shape({
  suscribe: Yup.string()
    .required("Este campo no puede estar vacío")
    .email("Por favor,ingrese un e-mail valido")
    .lowercase(),
});

const shippingSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo no puede estar vacío")
    .email("Por favor,ingrese un e-mail valido")
    .lowercase(),
  name: Yup.string()
    .required("Este campo no puede estar vacío")
    .lowercase()
    .trim()
    .transform((str) => str.replace(/ {2,}/g, " ")),
  surname: Yup.string()
    .required("Este campo no puede estar vacío")
    .lowercase()
    .trim()
    .transform((str) => str.replace(/ {2,}/g, " ")),
  adress: Yup.string()
    .required("Este campo no puede estar vacío")
    .lowercase()
    .trim()
    .transform((str) => str.replace(/ {2,}/g, " ")),
});

export { schema, suscribeSchema, shippingSchema };
