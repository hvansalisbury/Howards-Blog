const postTitle = document.querySelector('#post-title-input').value.trim();
const postText = document.querySelector('#post-text-input').value.trim();
const postId = document.querySelector('#update-post-form').getAttribute('post-id')

const updatePostFormHandler = async (event) => {
  event.preventDefault();

  if (postTitle && postText) {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ postTitle, postText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};
// delete post function
const deletePost = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  })
    .then(async (response) => await response.json())
    .then(function async(data) {
      location.href = `/dashboard/`;
    });
};
// update post submission
document
  .querySelector('#update-post-form')
  .addEventListener('submit', updatePostFormHandler);
// delete post button event listener
document
  .querySelector('#delete-post-btn')
  .addEventListener('click', deletePost);