const url = "https://jsonplaceholder.typicode.com/users"

const loadData = () => {fetch(url).then(res => res.json()).then(data => displayData(data));

}

const displayData = (cards) =>{

    const userCardContainer = document.getElementById('user-cards-container')

    userCardContainer.innerHTML = ``;

    cards.forEach(card => {
        
        const userCard = document.createElement('div');

        userCard.innerHTML = `
        
        <div class="user-card px-5 py-10 border rounded-xl shadow-lg ">
            <h3>User ID : ${card.id}</h3>
            <h1 class="font-bold">User Name : ${card.name}</h1>
            <p>Mail ID : ${card.email}</p>

            <p>Address: ${card.address.street}, ${card.address.suite}, ${card.address.city}</p>
        </div>

        `

        userCardContainer.append(userCard)
    });
}

loadData()