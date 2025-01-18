function getmax(nmbr1,nmbr2){
    if(nmbr1>nmbr2){
        return nmbr1;
    }
    else{
        return nmbr2;
    }
}

const max2= getmax(22,32);
const tmax= getmax(33,122);
const ultimatemax=getmax(max2,tmax);


const foundi=Math.max(22,21);
console.log(max2,tmax, foundi,ultimatemax);





let ramdon=[1,22,34,56,7,8,8,6]
const finding=ramdon.sort()
console.log(finding)