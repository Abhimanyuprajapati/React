// import { useState } from "react"

import { useState } from "react";

// const Added=()=>{
//     const [number, setNumber]=useState([])
//    const addme=()=>{
//     if(number.length===0){     // this is the one condition
//         setNumber([0]);
//         return;
//     }
//     const last=number[number.length-1];
//     const next=last + 1;
//     setNumber([...number, next]);
//    };

//     return (
//        <div>
//         <h1>the no. will show here</h1>
//         <button onClick={addme}>click me</button>
//         {number.map((elements)=>{
//             return( <h1>{elements}</h1> )
//         })}
//        </div>
//     )
// }
// export default Added;

const Added=()=>{
   const [number,setNumber]=useState([])    
//    refer 1
// if we will provide 0in above then it will show 0 on first render
// if we donot want to show in start in any number then refer 2
   const num=()=>{
    // refer 2
    /*
     if(number.length===0){
        setNumber([0]);
        return;
    }      do not write this 
    and replace this change in above
     const [number,setNumber]=useState([])    
     if we want to write 0 in empty pass array then 
     simple do this
     const [number,setNumber]=useState([0]) 
        do not write this code in click handle
         if(number.length===0){
        setNumber([0]);
        return;
    }

    */
    if(number.length===0){
        setNumber([0]);
        return;
    }
    const last=number[number.length-1];
    const next=last+1;
    setNumber([...number, next]);

   }
    return (
        <div>
            <h1>this are the number</h1>
            <button onClick={num}>click me</button>
            {number.map((Element)=>{
            return <h1>{Element}</h1>})
            }
        </div>
    );
};
export default Added;