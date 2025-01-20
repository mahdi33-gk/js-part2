const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 }
];
function Salary(empoyee){
    for(const money of empoyee){
        if(money.experience==0){
            const newSalary= money.increment +money.starting;
            console.log(newSalary);
        }
        else{
            const newSalary= money.experience * money.increment;
            const log= newSalary + money.starting;
            console.log(log);
        }
    }
    return 'shahin,shihab,shoikot,shohel.';
}

const finalResult= Salary(employees);
console.log(finalResult);