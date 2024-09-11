function validate() {
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const agreement = document.getElementById("agreement");
    const dob = document.getElementById("dob").value;
  
    let hasError = false; // Flag to track if any error exists
  
    if (username.length < 5) {
      document.getElementById("error_msg").innerHTML = "Username must be more than 5 characters";
      hasError = true;
    } else {
      document.getElementById("error_msg").innerHTML = "";
    }
  
    if (!validateDOB(dob)) {
      document.getElementById("error_msg1").innerHTML = "Invalid Date of Birth";
      hasError = true;
    } else {
      document.getElementById("error_msg1").innerHTML = "";
    }
  
    if (!email.endsWith("@gmail.com")) {
      document.getElementById("error_msg2").innerHTML = "Email must end with @gmail.com";
      hasError = true;
    } else {
      document.getElementById("error_msg2").innerHTML = "";
    }
  
    if (password.length < 8 || !isAlphanum(password)) {
      document.getElementById("error_msg3").innerHTML = "Password must be alphanumeric and at least 8 characters";
      hasError = true;
    } else {
      document.getElementById("error_msg3").innerHTML = "";
    }
  
    if (!agreement.checked) {
      document.getElementById("error_msg4").innerHTML = "You must agree to the terms and conditions";
      hasError = true;
    } else {
      document.getElementById("error_msg4").innerHTML = "";
    }
  
    // If no error exists and all fields are filled, redirect to HOME.html
    if (!hasError && username && email && password && dob) {
      window.location.href = "HOME.html";
    }
  }
    

function isAlphanum(string) {
    var isAlpha = false;
    var isNum = false;

    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
            isAlpha = true;
        } else {
            isNum = true;
        }
    }

    return isAlpha && isNum;
}

function validateDOB(dob) {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dob.match(dobRegex)) {
        return false;
    }

    const currentDate = new Date();
    const enteredDate = new Date(dob);

    // Check if the entered date is in the future or too far in the past
    if (enteredDate > currentDate || enteredDate.getFullYear() < (currentDate.getFullYear() - 120)) {
        return false;
    }

    return true;
}
