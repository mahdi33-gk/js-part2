const shopping=[
    { name:'shirt',price:200},
    { name:'braa',price:2000},
    { name:'underwear',price:20},
    { name:'pant',price:1200}
]

function allmonmey(items){
    let total=0;
    for(const item of items){
        total=item.price+total;
    }
    return total;
}
const totalpayablemoney= allmonmey(shopping);
console.log(totalpayablemoney);

















const allproducts=[
    { name:'pajabi',price:1100,quantity:2},
    { name:'braash',price:100,quantity:3},
    { name:'pant',price:500,quantity:4},
    { name:'book',price:300,quantity:2},
    { name:'shirt',price:200,quantity:1}
]

function getmoney(something){
    let total=0;
    for(const ites of something){
        const actualPrice= ites.quantity * ites.price;
        total=total+actualPrice;
    }
    return total;
}
const getmone= getmoney(allproducts);
console.log(getmone);










function discount(quantity){
    if(quantity <= 100){
        const total= quantity * 599;
        return total;
    }
    else if(quantity <=200){
        const total= quantity * 700;
        return total;
    }
    else{
        const total= quantity *300;
        return total;
    }
}
const discountPrice= discount(200);
console.log(discountPrice);
