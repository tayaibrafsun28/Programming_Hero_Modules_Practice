const loadPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        displayPost(data);
    });
}

const displayPost = (posts) => {

    // get the container

    const postContainer = document.getElementById('postContainer')

    posts.forEach(post => {
        console.log(post.title);

    // create HTML element

    const li = document.createElement("li");
    li.innerText = post.title;

    // add li in container

    postContainer.appendChild(li);
    });
}