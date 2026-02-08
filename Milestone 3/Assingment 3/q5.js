// Problem - 05

function analyzeText(str) {
    
    if(typeof(str)=='string'){
        
        let split = str.split(" ");
        let newText = split.join("");
        let token = newText.length
        let longwords = '';
        
        if(token!==0){

            for(let i =0; i<split.length; i++){
                if(split[i].length>longwords.length){
                    longwords=split[i];
                }
            }
            return {longwords, token};
        }

        else {
            return 'Invalid';

        }
    }

    else{
        return 'Invalid';
    }
}

const input = analyzeText("I am a little honest person");
console.log(input);