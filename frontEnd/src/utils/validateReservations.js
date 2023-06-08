import * as yup from 'yup';

const schema = yup.object().shape({
  date: yup
    .date()
    .required("Can't be empty.")
    .min(new Date(Date.now() - 86400000), "No puede elegir una fecha que ya pasó.")
    .typeError("Formato de fecha inválido."),
  hour: yup
    .string().required("No puede estar vacío.")
    .matches(/^([1][3-9]|2[0-2]):[0-5][0-9]$/, "Nuestro horario de atención es de 13:00hs a 23:00hs"),
  numPeople: yup.number().required("No puede estar vacío.")
});

export default schema;