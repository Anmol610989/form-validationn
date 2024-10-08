// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("span.error");




email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
    
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
    
  }
  else{
        document.querySelector('.main').style.display = 'none'
        document.querySelector('.success').style.display = 'block'
      }
});

dismis_button.addEventListener('click', ()=>{
    document.querySelector('.success').style.display = 'none'
    document.querySelector('.main').style.display = 'flex'
})

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "valid email required.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "valid email required";
}


  // Set the styling appropriately
  emailError.className = "error active";
//   console.log(emailError)
}

