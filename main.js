let arr = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let comodin = "🃏"; 

function insertarComodin(arr, comodin) {
    let nuevoArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push(arr[i]);  
        
        if (arr[i] !== comodin && arr[i + 1] !== comodin && i < arr.length - 1) {
            nuevoArray.push(comodin);
        }
    }
    return nuevoArray;
    }
    
let res = insertarComodin(arr, comodin);
console.log(res);



