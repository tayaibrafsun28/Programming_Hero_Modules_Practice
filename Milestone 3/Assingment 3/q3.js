// Problem - 03

function finalScore(omr) {
    if(omr.right+omr.wrong+omr.skip===100){
        let finalScore = omr.right*1+omr.wrong*(-0.5)+omr.skip*0
        return Math.round(finalScore);
    }

    else{
        return 'Invalid';
    }
}