import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  Nombre: Yup.string().required('El nombre es requerido'),
  Password: Yup.string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial'
    ),
    ConfirmPassword: Yup.string()
    .oneOf([Yup.ref('Password'), null], 'Las contraseñas deben coincidir')
    .required('Confirma tu contraseña'),
  Email: Yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  ConfirmEmail: Yup.string()
    .oneOf([Yup.ref('Email'), null], 'Los correos electrónicos deben coincidir')
    .required('Confirma tu correo electrónico'),
});

export default validationSchema;