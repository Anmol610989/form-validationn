
const email = document.getElementById("email");
const emailError = document.querySelector("span.error");
const success = document.querySelector('.success');
const mainContainer = document.querySelector('.main');
const alert_email = document.querySelector('.alert-email');

const dismissButton = document.getElementById('dismiss-btn');
const submitBtn = document.querySelector('.submit-btn');



submitBtn.addEventListener('click', function (e) {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  e.preventDefault();

  if (email.value === '' || !emailRegex.test(email.value)) {
      emailError.textContent = 'Valid email required';
      email.classList.add('active');
  }else {
      document.querySelector('.alert-email').innerHTML = email.value;
      document.querySelector('.main').style.display = 'none';
      success.style.display = 'flex';
  }

});

dismissButton.addEventListener('click', function () {
  success.style.display = 'none';
  mainContainer.style.display = 'flex';
  alert_email.innerHTML = '';
  email.value = '';
  email.classList.remove('emailI');
});

