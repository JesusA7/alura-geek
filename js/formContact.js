const formElements = document.querySelectorAll("[data-type]");

formElements.forEach((element) => {
  element.addEventListener("blur", (ev) => {
    validate(ev.target);
  });
});

function validate(element) {
  const dataType = element.dataset.type;
  console.log(element.validity.valid);
  if (validators[dataType]) validators[dataType](element);

  if (element.validity.valid) {
    element.parentElement.classList.remove("entrada__mensaje--invalido");
    element.parentElement.querySelector(".entrada__mensaje__error").innerHTML =
      "";
  } else {
    element.parentElement.classList.add("entrada__mensaje--invalido");
    element.parentElement.querySelector(".entrada__mensaje__error").innerHTML =
      ErrorMessage(element, dataType);
  }
}

const typeOfErrors = [
  "valueMissing",
  "customError",
  "tooShort",
  "typeMismatch",
];
const errorMessage = {
  nombre: {
    valueMissing: "El campo no puede estar vacio.",
    customError: "El campo nombre debe ser letras",
    tooShort: "El campo nombre debe tener minimo 3 caracteres.",
  },
  mensaje: {
    valueMissing: "El campo no puede estar vacio.",
    tooShort: "El campo mensaje debe tener más de 10 caracteres",
  },
  email: {
    valueMissing: "El campo no debe estar vacío.",
    typeMismatch: "Debes agregar un correo válido",
    customError: "correo electrónico o contraseña errónea",
  },
  password: {
    valueMissing: "El campo no debe estar vacío.",
    customError: "correo electrónico o contraseña errónea",
  },
};
const validators = {
  nombre: (element) => validateNombre(element),
};

function ErrorMessage(element, dataType) {
  let mensaje = "";
  typeOfErrors.forEach((error) => {
    console.log(element.validity[error]);
    console.log(error);
    if (element.validity[error]) {
      mensaje = errorMessage[dataType][error] ?? "Error";
    }
  });
  return mensaje;
}
function validateNombre(element) {
  let mensaje = "";
  if (!isNaN(element.value)) {
    mensaje = "El campo nombre debe ser letras";
  }

  element.setCustomValidity(mensaje);
}
