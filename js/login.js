const loginButton = document.getElementById('loginBtn'); // Use 'loginBtn' for consistency

loginButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission

  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');  


  // Check credentials and redirect on match
  if (emailInput.value === 'admin@admin.com' && passwordInput.value === 'admin') {
    window.location.href = 'index.html';
    } else {
    // Optional: Display a message without clearing values
    alert('Incorrect credentials');
  }
});