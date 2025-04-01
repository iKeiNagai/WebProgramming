function checkForm() {
    let errors = [];

    //get form values
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    
    //full Name validation
    if (fullName === "") {
        errors.push("Full Name is required.");
    }

    //email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }

    //password validation
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    //confirm Password validation
    if (password !== passwordConfirm) {
        errors.push("Passwords do not match.");
    }

    //display errors
    let errorDiv = document.getElementById("formErrors");
    errorDiv.innerHTML = ""; // Clear previous errors
    if (errors.length > 0) {
        errorDiv.innerHTML = `<ul><li>${errors.join("</li><li>")}</li></ul>`;
        errorDiv.style.color = "red";
    } else {
        alert("Registration successful!");
    }
}

// Attach event listener
document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    event.preventDefault(); // Prevent default form submission
});
