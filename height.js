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
