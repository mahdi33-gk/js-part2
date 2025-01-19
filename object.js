const chepeast_phones=[
    {name:"Iphone",price:"100000",color:'black',camera:'300mp'},
    {name:"Walton",price:"10000",color:'black',camera:'300mp'},
    {name:"Xiaomi",price:"20000",color:'black',camera:'300mp'},
    {name:"Redmi",price:"11000",color:'black',camera:'300mp'},
    {name:"Symphony",price:"21000",color:'black',camera:'300mp'}
]



function allkindaPhones(phones){
    let cheap=chepeast_phones[0];
    for(const allphone of phones){
        if(allphone.price<cheap.price){
            cheap=allphone;
        }
    }
    return cheap;
}
const reslt= allkindaPhones(chepeast_phones);
console.log(reslt);