// 1. Do the below programs in anonymous function & IIFE
//     a) Print odd numbers in an array

( ()=>{
    
    var oddNumber = [21,22,23,24,25,26,27,28,29,30];
    for(let i = 0; i < oddNumber.length; i++){
        if(oddNumber[i] % 2 != 0) {
            console.log(oddNumber[i]);
        }
    }
}) ();

    // b) Convert all the strings to title caps in a string array
    ( ()=>{
    
        const str = "kalai va ni";
        const newStr = str.split(' ')
          .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
          .join(' ');
        console.log(newStr);
        
        }) ();


// 2. Do the below programs in arrow functions
//     a) Print odd numbers in an array

const oddNumbers = () => {
    
    var oddNumbers = [11,12,13,14,15,16,17,18,19,20];
    for(let i = 0; i < oddNumbers.length; i++){
        if(oddNumbers[i] % 2 != 0) {
            console.log(oddNumbers[i]);
        }
    }
}
oddNumbers()
    // b) Convert all the strings to title caps in a string array
    const str = () => {
        const str = "ka lai va ni";
        const newStr = str.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
         console.log(newStr);
     }
     
     str()