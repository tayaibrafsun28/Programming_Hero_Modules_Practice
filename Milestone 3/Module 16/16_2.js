const name1 = 'TAyaib';
const name2 = 'tayAIb';

// To check if both are indicating the same thing even if charecters are not in same order we can do

if(name1.toLowerCase()===name2.toLowerCase()){ 

/* We can also do -
if(name1.toUpperCase()===name2.toUpperCase()){
*/
    console.log('Matched Bro', name1);
}

else{
        console.log("Didn't Matched Bro");
}


const name3 = ' Rafsun';
const name4 = 'Rafsun ';

// To check if both are indicating the same thing even if the white space in them are not same we can do

if(name3.trim()===name4.trim()){ 

    console.log('Matched Bro', name3);
}

else{
        console.log("Didn't Matched Bro");
}