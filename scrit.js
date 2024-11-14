function validateForm() {
    let isValid = true;

    // Get all fields and error message elements
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const message = document.getElementById("message");

    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const emailError = document.getElementById("email-error");
    const mobileError = document.getElementById("mobile-error");
    const messageError = document.getElementById("message-error");

    // Reset error messages
    firstNameError.style.display = lastNameError.style.display = emailError.style.display = mobileError.style.display = messageError.style.display = "none";

    // Validate each field
    if (firstName.value.trim() === "") {
        firstNameError.textContent = "First name is required.";
        firstNameError.style.display = "block";
        isValid = false;
    }

    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Last name is required.";
        lastNameError.style.display = "block";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = "Enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    if (mobile.value.trim() === "") {
        mobileError.textContent = "Mobile number is required.";
        mobileError.style.display = "block";
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile.value)) {
        mobileError.textContent = "Enter a valid 10-digit mobile number.";
        mobileError.style.display = "block";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Message is required.";
        messageError.style.display = "block";
        isValid = false;
    }

    return isValid;
}
