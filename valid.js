function checksomething(num,num2){
    if(num || num2 == 'string'){
        return 'please provide a number';
    }
    else{
        const add= num * num2;
        return add;
    }
    
}
const result= checksomething(3,"4");
console.log(result);