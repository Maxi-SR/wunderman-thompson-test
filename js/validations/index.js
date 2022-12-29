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

    inputCI.onfocus = () => {
            inputCI.classList.remove("error")
    }

    inputCheckbox.onfocus = () => {
        labelCheckbox.classList.remove("label-error");
    }


    const validate = (e) => {

            e.preventDefault();
            let validName = nameLnValidation(nameInput);
            let validLName = nameLnValidation(lnameInput);
            let validEmail = validateEmail(inputEmail);
            let validCI = validarCedula(inputCI.value) && inputCI.value.length !== 0 ;
            validateSelect(inputSelectDep, inputSelectLoc);
            !inputCheckbox.checked ? labelCheckbox.classList.add("label-error") : '';
            !validCI ? (inputCI.classList.add("error")) : '';
            !validEmail ? (inputEmail.classList.add("error")) : '';
            !validName ? (nameInput.classList.add("error")) : '';
            !validLName ? (lnameInput.classList.add("error")) : '';
        }

    form.addEventListener("submit", validate);
}