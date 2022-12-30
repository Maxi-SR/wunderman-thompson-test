window.onload = () => {
    
    const form = document.getElementById("send-form");
    const nameInput = document.getElementById("name");
    const lnameInput = document.getElementById("lastName");
    const inputEmail = document.getElementById("email");
    const inputCI = document.getElementById("ci");
    const inputCheckbox = document.getElementById("input-checkbox");
    const labelCheckbox = document.getElementById("label-checkbox");
    const inputSelectDep = document.getElementById("depto");
    const inputSelectLoc = document.getElementById("loc");
    const id1Select = document.getElementById("dep-error-message");
    const id2Select = document.getElementById("loc-error-message");

    inputCI.onfocus = () => {
            inputCI.classList.remove("error");
            document.getElementById("ci-error-message").innerHTML = '';
    }

    inputCheckbox.onfocus = () => {
        labelCheckbox.classList.remove("label-error");
    }

    const nameError = () => {
        nameInput.classList.add("error");
        document.getElementById("name-error-message").innerHTML = 'El nombre debe tener al menos dos caractéres';
    }

    const lastNameError = () => {
        lnameInput.classList.add("error");
        document.getElementById("lastName-error-message").innerHTML = 'El apellido debe tener al menos dos caractéres';
    }

    const emailError = () => {
        inputEmail.classList.add("error");
        document.getElementById("email-error-message").innerHTML = 'El email debe tener un formato válido';
    }

    const ciError = () => {
        inputCI.classList.add("error");
        document.getElementById("ci-error-message").innerHTML = 'Complete CI sin puntos ni guiones';
    }
 
    const validate = (e) => {

            e.preventDefault();
            let validName = nameLnValidation(nameInput);
            let validLName = nameLnValidation(lnameInput);
            let validEmail = validateEmail(inputEmail);
            let validCI = validarCedula(inputCI.value) && inputCI.value.length !== 0 ;

            validateSelect(inputSelectDep, inputSelectLoc, id1Select, id2Select);
            !inputCheckbox.checked ? labelCheckbox.classList.add("label-error") : '';
            !validCI ? (ciError()) : '';
            !validEmail ? (emailError()) : '';
            !validName ? (nameError()) : '';
            !validLName ? (lastNameError()) : '';
        }

    form.addEventListener("submit", validate);
}