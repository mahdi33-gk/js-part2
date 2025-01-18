const allnam=[1,2,3,4,5,6,6,7,7545,3,33];
function getmax(numbers){
    let maxnumber=allnam[0];
    for(const number of numbers){
        if(number>maxnumber){
            maxnumber=number;
        }

    }
    return maxnumber;
}
const foundone= getmax(allnam);
console.log(foundone);







const minimal=[1123,2222,32303,312323,43456,34346,3556,346874,23422];

function getmin(number){
    let mininmbr=minimal[0];
    for(const ittem of number){
        if(ittem<mininmbr){
            mininmbr=ittem;
        }
    }
    return mininmbr;
}
const realmini= getmin(minimal);
console.log(realmini);