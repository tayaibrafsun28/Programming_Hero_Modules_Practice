// Problem - 04

function gonoVote(array) {
    let ha = 0 , na = 0;
    if(Array.isArray(array)){
        for(let i = 0; i<array.length; i++){
        if(array[i]=='ha'){
            ha++;
        }

        else{
            na++;
        }
    }

    if(ha>na){
        return true;
    }

    else if(na>ha){
        return false;
    }

    else{
        return 'equal';
    }
    }

    else{
        return 'Invalid';
    }
}