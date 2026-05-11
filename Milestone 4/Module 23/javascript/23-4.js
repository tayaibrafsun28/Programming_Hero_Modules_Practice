document.getElementById('login-btn').addEventListener('click', function click() {
    const userUpdate = document.getElementById('notLoggedIn')

    userUpdate.innerText = 'User Logged In'
})




// Update text dynamically

//add eventListener to the button
document.getElementById('enter-btn').addEventListener('click', function(){

    // set the input in a variable

    const name = document.getElementById('enter-name')

    // set the input value in another variable

    const userName = name.value;

    // set the new data in place where updated needed

    const updateName = document.getElementById('no-name')

    updateName.innerText = userName;
})


document.getElementById('reset').addEventListener('click', function reset(){

    const resetUser = document.getElementById('notLoggedIn')
    resetUser.innerText = 'No User'

    const resetNoName =  document.getElementById('no-name')
    resetNoName.innerText = 'No name'

    const resetEnterName =  document.getElementById('enter-name')
    resetEnterName.value = ''
})