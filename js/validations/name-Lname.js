window.onload = () => {
    
    const form = document.getElementById("send-form");
    const nameInput = document.getElementById("name");

    const nameLnValidation = (inputSelected) => {

        inputSelected.onfocus = () => {
            nameInput.classList.remove("error")
        }

        if (inputSelected.value.length <= 2) {
            return false;
        }
        return true;
    }
    
    const validate = (e) => {
            e.preventDefault();
            let valid = nameLnValidation(nameInput);
            !valid ? (nameInput.classList.add("error")) : '';
        }
        
    form.addEventListener("submit", validate);

}