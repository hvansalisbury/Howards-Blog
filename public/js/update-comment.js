const commentId = document.querySelector('#update-comment-form').getAttribute('comment-id')
const updateCommentFormHandler = async (event) => {
  event.preventDefault();
  const commentTitle = document.querySelector('#comment-title-input').value.trim();
  const commentText = document.querySelector('#comment-text-input').value.trim();
  
  if (commentTitle && commentText) {
    const response = await fetch(`/api/comment/${commentId}`, {
      method: 'PUT',
      body: JSON.stringify({ commentTitle, commentText, commentId}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/dashboard/comments`);
    } else {
      alert('Failed to update comment.');
    }
  }
};
// delete post function
const deleteComment = async function () {
  await fetch(`/api/comment/${commentId}`, {
    method: "DELETE",
  })
    .then(async (response) => await response.json())
    .then(function async(data) {
      location.href = `/dashboard/`;
    });
};
// update post submission
document
  .querySelector('#update-comment-form')
  .addEventListener('submit', updateCommentFormHandler);
// delete post button event listener
document
  .querySelector('#delete-comment-btn')
  .addEventListener('click', deleteComment);