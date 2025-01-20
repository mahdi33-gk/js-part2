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



function arery(numbers){
    if(Array.isArray(numbers)){
        const second= numbers[2];
        return second;
    }
    else{
        return 'provide a valid array';
    }
}
const array= arery([1,23.4,57,97,6,4]);
console.log(array);











function findFourthItem(numbhers){
    if(Array.isArray(numbhers)){
        if(numbhers.length>=4){
            const fourthnmbr= numbhers[3];
            return fourthnmbr;
        }
        else{
            const lengthi= numbhers.length;
            const ans= 'There is no 4th number. there is only '+ lengthi +' numbers.';
            return ans;
        }
    }
    
    else{
        return 'please provide an array';
    }
}
const rstt= findFourthItem([1,2,3]);
console.log(rstt);










function objectCheck(numberr){
    if(typeof numberr !== 'object'){
        return 'Sir/Maam, please provide and object.'
    }
    else{
        const price= numberr.price;
        return price;
    }
}
const objectchecker= objectCheck({name:'dalim',price:3000});
console.log(objectchecker);