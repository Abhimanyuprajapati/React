/*
This is called props driling so the components A and B does not need the information 
the components c need the information 
so because of props driling 

"Context Provider" came in the use
*/


// -----------------this is example 1 -----------------------------                            

const ComponentsC=({userdetail})=>{
    console.log(userdetail)
    return(
        <>
         <h3>This is the components C</h3>
         <h1>{userdetail.name}</h1>
         <h1>{userdetail.rollno}</h1>
         <h1>{userdetail.studentId}</h1>
         <h1>{userdetail.state}</h1>
        </>
    )
};

const ComponentsB=({userdetail})=>{
    return(
        <>
         <h3>This is the components B</h3>
         <ComponentsC userdetail={userdetail}/>
        </>
    )
};

const ComponentsA=({userdetail})=>{
    return(
        <>
        <h3>This is the components A</h3>
        <ComponentsB userdetail={userdetail}/>
        </>
    )
};



export const Prop_driling = () => {
    const userdetail={
        name:"abhimanyu",
        rollno:54,
        studentId:20152,
        state:"up"
    };

  return (
    <>
    <div>This is call Pops driling </div>
    <ComponentsA userdetail={...userdetail}/>
    {/* <ComponentsA user={...userdetail}/>    name does not matter here */}
    </>
  )
}
