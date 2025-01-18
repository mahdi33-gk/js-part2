const minimal=[11111,2222,12112,212334,45566,1111,2234];
function getmin(numbrs){
    let min=minimal[0];
    for(const number of numbrs){
        if(number<min){
            min=number;
        }
    }
    return min;
}
const getminion= getmin(minimal);
console.log(getminion);