const validations = (form) => {
  const errors = {};

  if (!form.name) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!form.description) {
    errors.description = "La descripción es obligatoria.";
  }

  if (isNaN(form.rating) || form.rating < 1 || form.rating > 10) {
    errors.rating = "El rating debe ser un número entre 1 y 10.";
  }

  if (!form.platforms) {
    errors.platforms = "Las plataformas son obligatorias.";
  }

  return errors;
};

export default validations;
