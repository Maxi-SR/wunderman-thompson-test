const nameLnValidation = (inputSelected) => {

    inputSelected.onfocus = () => {
        inputSelected.classList.remove("error");
        inputSelected.id === "name" ? (document.getElementById("name-error-message").innerHTML = '') : '';
        inputSelected.id === "lastName" ? (document.getElementById("lastName-error-message").innerHTML = '') : '';
    }

    if (inputSelected.value.length < 2) {
        return false;
    }

    return true;
}