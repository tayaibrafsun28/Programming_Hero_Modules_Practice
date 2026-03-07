const loadPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        displayPost(data);
    });
}

const displayPost = (posts) => {
    displayPost.forEach(post => {
        console.log(post);
    });
}