const nameLnValidation = (inputSelected) => {

    inputSelected.onfocus = () => {
        inputSelected.classList.remove("error")
    }

    if (inputSelected.value.length < 2) {
        return false;
    }

    return true;
}