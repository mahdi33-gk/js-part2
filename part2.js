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

console.log(max2,tmax,ultimatemax);