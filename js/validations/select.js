const validateSelect = (inputDep, inputLoc) => {

    inputDep.onfocus = () => {
        inputDep.classList.remove("error");
    }

    inputLoc.onfocus = () => {
        inputLoc.classList.remove("error");
    }

    (inputDep.value === 'Departamento') ? inputDep.classList.add("error") : '';
    (inputLoc.value === 'Localidad') ? inputLoc.classList.add("error") : '';

}