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