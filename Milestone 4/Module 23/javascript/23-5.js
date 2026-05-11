document.getElementById('submit-btn').addEventListener('click', function(){

    // Step: 1 - Fetch comment from the textarea
    const comment = document.getElementById('comment');

    const commentText = comment.value;

    // Step: 2 - Get the parent where to post comment

    const commentsContainer = document.getElementById('comments-container');

    // Step: 3 - Creat p tag for the comment


    const newComment = document.createElement('p');
    newComment.classList.add('comments')
    newComment.innerText = commentText;
    
    // Step: 4 - Append child to parent

    commentsContainer.append(newComment);

    // Step: 5 - Clear text area
    
    comment.value='';
})