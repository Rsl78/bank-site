//step 1: Add click handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step 2: Get the email address
  // Always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email);

  // Step 3: get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(password);

  if(email=== 'admin@gmail.com' && password=== 'secret'){
    console.log('valid User')
  }
  else{
    console.log('invalid User')
  }
});
