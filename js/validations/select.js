const validateSelect = (inputDep, inputLoc, idErr1, idErr2) => {

    inputDep.onfocus = () => {
        inputDep.classList.remove("error");
        idErr1.innerHTML = '';
    }

    inputLoc.onfocus = () => {
        inputLoc.classList.remove("error");
        idErr2.innerHTML = '';
    }

    if ((inputDep.value === 'Departamento')) {
        inputDep.classList.add("error");
        idErr1.innerHTML = 'Debe tener una opción valida';
    }

    if (inputLoc.value === 'Localidad') {
        inputLoc.classList.add("error");
        idErr2.innerHTML = 'Debe tener una opción valida';
    }
}