function checksomething(num,num2){
    if(num || num2 == 'string'){
        return 'please provide a number';
    }
    else{
        const add= num * num2;
        return add;
    }
    
}
const result= checksomething(3,4);
console.log(result);


function multi(nmbr1,nmbr2){
    if(typeof nmbr1 ==! 'number' ||  typeof nmbr2 !==  'number'){
        return 'provide a number please';
    }
    else{
        const result= nmbr1 * nmbr2;
        return result;
    }
}
const gotcha= multi(2,6);
console.log(gotcha);



function nameadder(first,second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'String only sir.please provide a string';
    }
    else{
        const adder= first +' '+ second;
        return adder;
    }
}
const namecheck= nameadder('Nidhu','Buttu');
console.log(namecheck);