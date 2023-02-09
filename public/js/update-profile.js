
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
  document.querySelector('#message-box').classList.remove('hidden')
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
// delete profile
const deleteProfile = async (event) => {
  const response = await fetch(`/api/user/`, {
    method: 'DELETE',
    // body: JSON.stringify({ username, email, password, oldPassword }),
    // headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to delete.');
  }
}
// update post submission
document
  .querySelector('#update-profile-form')
  .addEventListener('submit', updateProfileFormHandler);
// check if new passwords match
document.querySelector('#password-check-fields')
  .addEventListener('keyup', checkPasswordMatch)
// delete profile button
document.querySelector('#delete-profile-btn')
  .addEventListener('click', deleteProfile)