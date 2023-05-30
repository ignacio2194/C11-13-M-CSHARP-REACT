import * as yup from 'yup';

const schema = yup.object().shape({
  date: yup
    .date()
    .required("Can't be empty.")
    .min(new Date(Date.now() - 86400000), "Date cannot be in the past")
    .nullable()
    .typeError("Invalid date format"),
  hour: yup
    .string().required("Can't be empty.")
    .matches(/^([1][3-9]|2[0-2]):[0-5][0-9]$/, "Our opening hours are from 14:00hs to 23:00hs"),
  numPeople: yup.number().required("Can't be empty.")
});

export default schema;