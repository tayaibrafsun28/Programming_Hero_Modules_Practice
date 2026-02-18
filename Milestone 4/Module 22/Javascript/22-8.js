// METHOD 1 of creating a HTML list in JS

// 1. Parent Node

const mainContainer = document.getElementById('main-container');

// 2. Creat Child Node

const foodSection = document.createElement('section')

// 3. create h1

const h1 = document.createElement('h1')
h1.innerText = 'Food List'
foodSection.appendChild(h1)

// 4. create ul

const ul = document.createElement('ul')

// 5. create li

const li1 = document.createElement('li');
li1.innerText = 'Pizza'

const li2 = document.createElement('li');
li2.innerText = 'Burger'

const li3 = document.createElement('li');
li3.innerText = 'Shawarma'

// 6. adding items in ul

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)


// 7. append foodSection to mainContainer

mainContainer.appendChild(foodSection)

// 8. append h1 to foodSection

foodSection.appendChild(h1)


// 9. append ul to foodSection

foodSection.appendChild(ul)


// METHOD 2 of creating a HTML list in JS

const milkShakes = document.createElement('section');

milkShakes.innerHTML = `
<h1>Milk-Shakes</h1>
<ul>
    <li>Oreo</li>
    <li>Kitkat</li>
    <li>Chocolate</li>
<ul>

`

// append milkShakes to maincontainer

mainContainer.appendChild(milkShakes)
