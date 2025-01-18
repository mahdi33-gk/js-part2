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





function goodshop(fishquantity,fruitsquantity,vegetablesquantity){
    const fishprice=400;
    const fruitprice=3;
    const vegetableprice=1;

    const payforFish= fishquantity * fishprice;
    const payforFruits= fruitsquantity * fruitprice;
    const payforVegetables= vegetablesquantity * vegetableprice;

    const totalMoney= payforFish + payforFruits + payforVegetables;


    return totalMoney;
}
const havetopay= goodshop(2,5,12);
console.log(havetopay);