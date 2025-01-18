function getpayableMoney(bedquantity,chairQuantity,tableQuantity){
    const forbed=2;
    const forchair=1;
    const fortable=.4;
    
    const payforbed= bedquantity* forbed;
    const payforchair= chairQuantity*forchair;
    const payforttabe= tableQuantity* fortable;

    const allpayablemoney= payforbed + payforchair + payforttabe;

    return allpayablemoney;
}

const needmoney= getpayableMoney(22,3,60);
console.log(needmoney);