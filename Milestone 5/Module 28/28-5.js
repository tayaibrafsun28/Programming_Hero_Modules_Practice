const loadPost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>{
        showPost(data);
    });
};

const showPost = (posts) =>{

        // Fetch data from postContainer

        const postContainer = document.getElementById('postContainer');

        postContainer.innerHTML = "";


        posts.forEach(post => {
        
        // Create post card div
        
        const postCard = document.createElement('div');

        //set card inner html data

        postCard.innerHTML = `
        
        <div id="postCard">
        
            <h1>${post.id}</h2>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>

        `

        //Append child

        postContainer.append(postCard);

        });
        
}