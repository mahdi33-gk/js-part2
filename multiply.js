function add(nmbr1,nmbr2){
    return a+b;
}
function devide(nmbr1,nmbr2){
    return a-b;
}
function multi(nmbr1,nmbr2){
    return a*b;
}
function subtract(nmbr1,nmbr2){
    return a/b;
}

function getresult(nmbr1,nmbr2,operation){
    if(operation==='add'){
        const result=add(nmbr1,nmbr2);
        return result;
    }
    else if(operation === 'devide'){
        const result=devide(nmbr1,nmbr2);
        return result;
    }
    else if(operation === 'multi'){
        const result=multi(nmbr1,nmbr2);
        return result;
    }
    else if(operation=== 'subtract'){
        const reslt= subtract(nmbr1,nmbr2);
        return reslt;
    }
    else{
        return 'fuck it';
    }
}
const getans= getresult(33,44,'multi');
console.log(getans);
const faiil= add(1,3);
console.log(faiil);