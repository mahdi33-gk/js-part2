const heights=[121,323,123,111,3423,123];
function mincheck(number){
    let min=heights[0];
    for(const item of number){
        if(item<min){
            min=item;
            return min;

        }
    }
}
const result = mincheck(heights);
console.log(result);