const cls = document.getElementsByClassName('players');

for(const pl of cls){
    console.log(cls);
    pl.style.backgroundColor = 'gold';
    pl.style.border = '3px solid red';
    pl.style.padding = '50px';

}