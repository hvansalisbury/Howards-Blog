
const updateProfileFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input').value.trim();
  const email = document.querySelector('#email-input').value.trim();
  const newPassword = document.querySelector('#new-password-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  const oldPassword = document.querySelector('#old-password-input').value.trim();

  if (newPassword !== password) {
    alert('New passwords must match');
    return;
  };

  if (username && email && newPassword && password && oldPassword) {
    const response = await fetch(`/api/user/update`, {
      method: 'PUT',
      body: JSON.stringify({ username, email, password, oldPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};
// check if new passwords match
const checkPasswordMatch = async (event) => {
  const element = event.target;
  const newPassword = document.querySelector('#new-password-input').value.trim()
  const password = document.querySelector('#password-input').value.trim()
  const message = document.querySelector('#password-match-message')
  if (element.matches('input')) {
    if (newPassword === password) {
      message.textContent = 'passwords match'
    } else (
      message.textContent = 'passwords do not match!'
    )
  }
}
// update post submission
document
  .querySelector('#update-profile-form')
  .addEventListener('submit', updateProfileFormHandler);
// check if new passwords match
document.querySelector('#password-check-fields')
  .addEventListener('keyup', checkPasswordMatch)