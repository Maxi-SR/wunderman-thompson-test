window.onload = () => {
    
    const form = document.getElementById("send-form");
    const nameInput = document.getElementById("name");
    
const validate = (e) => {
        e.preventDefault();
        if (nameInput.value.length <= 2) {
            nameInput.classList.add("error");
        }
    }
    
    console.log(form);
    
    form.addEventListener("submit", validate);

}