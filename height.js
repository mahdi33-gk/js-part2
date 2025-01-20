const heights=[121,323,123,111,3423,123];
function mincheck(number){
    let min=heights[0];
    for(const item of number){
        if(item<min){
            min=item;
           

        }
    }
    return min;
}
const result = mincheck(heights);
console.log(result);







const names=['Mehedi','Mira','Aboni','Aboni','Nid'];
function getLitteone(words){
    let shortname=names[0];
    for(const name of words){
        if(name.length<shortname.length){
            shortname=name;
            
        }
    }
    return shortname;
}

const resut= getLitteone(names);
console.log(resut);




function buylaptoptvmobile(quantitylap,quantitymob,quantitytv){
    const tvprice=20000;
    const laptop=34000;
    const mobile=15000;

    const payableForTv= quantitytv * tvprice;
    const payableForlaptop= quantitylap * laptop;
    const payableFormobile= quantitymob * mobile;

    const totalPayableMOney= payableForTv + payableForlaptop + payableFormobile;

    console.log(totalPayableMOney);
}

buylaptoptvmobile(1,1,1);