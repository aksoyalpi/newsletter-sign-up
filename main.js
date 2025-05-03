const form = document.getElementById("form");
const confirmation = document.getElementById("confirmation")
const mailField = confirmation.querySelector(".email-text");
const container = document.getElementById("container");
const dismissButton = document.getElementById("dismiss-button");

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const email = Object.fromEntries(new FormData(e.target))["email"];
    if(email !== "" && validateEmail(email)){
        console.log("valid");

        container.classList.add("hidden");
        confirmation.classList.remove("hidden");
        mailField.textContent = email;
    } else {
        console.log("invalid ");
        const errorMessage = form.querySelector(".error-email");
        const emailInput = form.querySelector(".email-input");

        errorMessage.textContent = "Valid email required";
        emailInput.classList.add("error");
    }

    console.log(email);
}

const handleDismiss = (e) => {
    console.log("Dismissed")
    confirmation.classList.add("hidden");
    container.classList.remove("hidden");
}

dismissButton.addEventListener("click", handleDismiss);
form.addEventListener("submit", handleSubmit);