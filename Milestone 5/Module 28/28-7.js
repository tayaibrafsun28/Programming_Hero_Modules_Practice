const loadToDo = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        showToDo(data);
    });
};

const showToDo = (toDos) =>{

    const toDoContainer = document.getElementById('toDoContainer');

    toDoContainer.innerHTML = '';

    toDos.forEach(toDo => {
        
        const toDoCard = document.createElement('div');

        toDoCard.innerHTML = `
        
         <div id="toDo">
            <div>
            ${toDo.completed == true 
            ? `<i class="fa-solid fa-square-check" style="color: rgb(0, 0, 0);"></i>`
            : `<i class="fa-regular fa-square-check" style="color: rgb(0, 0, 0);"></i>`
            }
            </div>
            <h4>${toDo.title}</h4>
        </div>

        `

        toDoContainer.append(toDoCard);
    });

}

loadToDo();