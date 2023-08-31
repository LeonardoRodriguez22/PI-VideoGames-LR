const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export default (data) => {
  let errors = {};
  
  
  if (!regexEmail.test(data.email)) {
    errors.e1 = "Debe ser un correo electronico";
  }
  if (!data.email) {
    errors.e1 = "Ingrese Email";
  }
  if (data.email.length > 35) {
    errors.e1= "debe tener menos de 35 carateres";
  }
  if (!/\d/.test(data.password)) {
    errors.p1 = "debe tener al menos un numero";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.p1= "debe ser mayor a seis y menor a diez caracters";
  }
  return errors;
};




