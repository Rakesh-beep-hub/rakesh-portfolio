document.getElementById('clickBtn').addEventListener('click', function() {
  document.getElementById('message').textContent = 'You clicked the button! 🎉';
});

document.getElementById('fbLoginBtn').addEventListener('click', function() {
  // Simulate a login success message
  document.getElementById('fbMessage').textContent = 'Facebook login simulated! Welcome back!';
});