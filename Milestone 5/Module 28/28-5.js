const loadPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        displayPost(data);
    });
}

const displayPost = (posts) =>{

    // Fetch post container and empty innerHTML

    const postContainer = document.getElementById('postContainer');

    postContainer.innerHTML = "";


    posts.forEach((post) => {

        // create element

        const postCard = document.createElement("div");

        postCard.innerHTML =`
        
        <div class="postCard">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>

        `

        // Append Child 
        
        postContainer.append(postCard);

    });

}