const mobiles=[
    {name:'Iphone',brand:'apple',color:'black n white',price:100000},
    {name:'Xiomi',brand:'redmi',color:'black n white',price:21000},
    {name:'Walton',brand:'Bd',color:'black n white',price:10000},
    {name:'Hv',brand:'bideshea',color:'black n white',price:12000},
    {name:'SOny',brand:'Italy',color:'black n white',price:24000}
]

function priceAvrg(phones){
    let sum=0;
    for(const phone of phones){
        sum=sum+phone.price;
    }
    const aver= sum/phones.length;
    return aver;
}

const avrg= priceAvrg(mobiles);
console.log(avrg);
