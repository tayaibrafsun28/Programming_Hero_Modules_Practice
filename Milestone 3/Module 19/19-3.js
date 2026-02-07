function woodCalculator(chair, table, bed){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const total = chair*chairWood + table*tableWood + bed*bedWood;

    return total;
}
const wood = woodCalculator(4,1,1);
console.log('Wood needed : '+wood+' CFT');