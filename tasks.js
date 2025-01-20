const mobiles=[
    {name:'Iphone',brand:'apple',color:'black n white',price:100000},
    {name:'Xiomi',brand:'redmi',color:'black n white',price:21000},
    {name:'Walton',brand:'Bd',color:'black n white',price:10000},
    {name:'Hv',brand:'bideshea',color:'black n white',price:12000},
    {name:'SOny',brand:'Italy',color:'black n white',price:24000}
]

function priceAvrg(phones){
    let dprice=0;
    for(const phone of phones){
        dprice= dprice + phone.price;
        
    }
    const avrg = dprice / phones.length;
    return avrg;
}

const avrg= priceAvrg(mobiles);
console.log(avrg);
