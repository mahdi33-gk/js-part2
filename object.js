const chepeast_phones=[
    {name:"Iphone",price:"100000",color:'black',camera:'300mp'},
    {name:"Walton",price:"10000",color:'black',camera:'300mp'},
    {name:"Xiaomi",price:"20000",color:'black',camera:'300mp'},
    {name:"Redmi",price:"11000",color:'black',camera:'300mp'},
    {name:"Symphony",price:"21000",color:'black',camera:'300mp'}
]



function allkindaPhones(phones){
    for(const allphone of phones){
        console.log(allphone);
    }
}
const reslt= allkindaPhones(chepeast_phones);
console.log(reslt);