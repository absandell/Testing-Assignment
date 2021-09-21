const functions = {
    vowelStrip: (myString) =>{
        let temp = '';
        for (let i = 0; i < myString.length; i++){
            if(myString[i] != 'a' && myString[i] != 'e' && myString[i] != 'i' && myString[i] != 'o' && myString[i] != 'u'){
                temp+=myString[i];
            }
        }
        return temp;
    },
    multiply: (a,b) => {
        return a * b;
    }
}

module.exports = functions;