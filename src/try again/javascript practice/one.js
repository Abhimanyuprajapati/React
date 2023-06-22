let value=document.getElementById('para');
const obj=[
    {
        Id:1212,
        name:"akash",
        rollno:52,
        age:15
    },
    {
        Id:121,
        name:"bila",
        rollno:53,
        age:19
    },
    {
        Id:1,
        name:"vivek",
        rollno:50,
        age:18
    },
    {
        Id:12536,
        name:"vinod",
        rollno:42,
        age:20
    },
    {
        Id:120,
        name:"varsha",
        rollno:12,
        age:16
    }
];
// let value1=obj.filter((student)=>{
//     return student.age>=18;
// }).map((student)=>{
//     return `
//     <div>Name:${student.name}</div>
//     <h1>Rollno:${student.rollno}</h1>
//     <p>Age:${student.age}</p>
//     `
// });

const value2=obj.map((student)=>{
    return `
    <div>Name:${student.name}</div>
    <h1>Rollno:${student.rollno}</h1>
    <p>Age:${student.age}</p>
    `
});
// console.log(value1);
// value.appendChild(value1);
value.innerHTML=value2;