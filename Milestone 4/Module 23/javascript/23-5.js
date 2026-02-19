document.getElementById('submit-btn').addEventListener('click', function(){
    const comment = document.getElementById('comment');

    const commentText = comment.value;

    const commentBox = document.createElement('div');

    commentBox.classList.add('comments')

    const newComment = document.createElement('p');

    newComment.innerText = commentText;

    const commentsContainer = document.getElementById('comments-container');



    commentsContainer.append(commentBox);

    commentBox.append(newComment);

    comment.value='';
})