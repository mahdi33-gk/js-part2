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
}
const getans= getresult(33,44,'add');
console.log(getans);