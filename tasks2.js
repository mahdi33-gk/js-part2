
// function Salary(empoyee){
//     let newSl=[];
//     for(const money of empoyee){
        
//         if(money.experience==0){
//             const newSalary= money.increment +money.starting;
//             newSl.push(newSalary);
//         }
//         else{
//             const newSalary= money.experience * money.increment;
//             const log= newSalary + money.starting;
//             newSl.push(log);
//         }
//     }
    
//     return newSl;
// }

// const finalResult= Salary(employees);
// console.log(finalResult);

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 }
];
let nowSalary=[];
function all(persons){
    
    for(const person of persons){
        if(person.experience !== 0){
            const salary=(person.experience * person.increment) + person.starting;
            nowSalary.push(salary);
        }
        else{
            const salary= person.increment + person.starting;
            nowSalary.push(salary);
        }

    }
    return nowSalary;
}
 
const reals=all(employees);
console.log(reals);
let i= 0;
for(const per of nowSalary){
    
    i=i+per;
    
}
console.log(i);

const average= i/employees.length;
console.log(average);