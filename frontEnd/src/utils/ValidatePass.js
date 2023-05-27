import * as Yup from 'yup';

const ValidatePass = Yup.string()
  .min(6, 'La contraseña debe tener al menos 6 caracteres')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'La contraseña debe cumplir los criterios de seguridad');

// Uso de la función de validación
const password = 'Abcdef123@';
ValidatePass.isValidSync(password); // Devuelve true si la contraseña es válida, de lo contrario devuelve false

export default ValidatePass