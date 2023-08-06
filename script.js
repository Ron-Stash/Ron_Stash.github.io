// script.js

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
  const account = document.getElementById('account').value;
  const password = document.getElementById('password').value;
  
  const url = 'save.php?account=' + account + '&password=' + password;

  fetch(url);
});
