
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validateEmail = (email) => {

    email.onfocus = () => {
        email.classList.remove("error");
    }

    return String(email.value)
      .toLowerCase()
      .match(regex);
};
    