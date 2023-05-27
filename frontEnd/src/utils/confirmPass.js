import * as Yup from 'yup';

const confirmPass = Yup.string()
  .required('La confirmación de contraseña es requerida')
  .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden');
  

export default confirmPass;