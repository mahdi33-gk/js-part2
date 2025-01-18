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