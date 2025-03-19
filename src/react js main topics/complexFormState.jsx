import "./css/style1.css";
import { useState } from "react";


// more best way 
const Complexformstate=()=>{
    const [formdetails, setFormdetail]=useState({
        first: "",
        second: "",
        email: "",
    });

    const formhandler=(event)=>{
        const field=event.target.name;
        const value=event.target.value;

        let newformhandler={};
        if(field==="first"){
            newformhandler={
            ...formdetails,
            first:value
            };
        }else if(field==="second"){
            newformhandler={
            ...formdetails,
            second:value
            };
        }else{
            newformhandler={
                ...formdetails,
                email:value
                };
        }
        setFormdetail(newformhandler);       
    }
    return (
        <div className="container">
            <label>First name:</label>
            <input onChange={formhandler}
             type="text" 
             value={formdetails.first} 
             placeholder="john"
             name="first"/> 

            <label>Second name:</label>
            <input onChange={formhandler} 
             type="text" 
             value={formdetails.second} 
             placeholder="chena"
             name="second"/>

            <label>Email:</label>
            <input onChange={formhandler} 
             type="text" 
             value={formdetails.email} 
             placeholder="johnchena@110"
             name="email"/>        
        </div> 
    )
}
export default Complexformstate;



/*

//  Method 1 : Brute Force Approach

const Complexformstate=()=>{                       // Arrow function hai

    const [first,setFirst] = useState("");
    const handlerfirst=(event)=>{
        return  setFirst(event.target.value);
    }



    const [second,setSecond]=useState("");
    const handlersecond=(event)=>{
        return  setSecond(event.target.value);
    }



    const [email,setEmail]=useState("");
    const handleremail=(event)=>{
        return  setEmail(event.target.value);
    }
   
    // always use the onchange method for form validation
    return (
        <div className="container">
            <label>First name:</label>
            <input onChange={handlerfirst} type="text" value={first} placeholder="john"/>  
            <label>Second name:</label>
            <input onChange={handlersecond} type="text" value={second} placeholder="chena"/>
            <label>Email:</label>
            <input onChange={handleremail} type="text" value={email} placeholder="johnchena@110"/>
        </div>
    )
}
export default Complexformstate;
*/

// ----------------------------------------------------------------------


// second method  

// const Complexformstate=()=>{
    // const [first,setFirst] = useState("");
    // const [second,setSecond]=useState("");
    // const [email,setEmail]=useState("");

//     // 1  refer is this
//     const Mapping={
//         first:setFirst,
//         second:setSecond,
//         email:setEmail,
//     };

//     const forminputHandler=(field, value)=>{
        /*

        if(field=="first"){
            setFirst(value);
        }else if(field=="second"){
            setSecond(value);
        }else{
            setEmail(value);
        }
        */
        // more better is this
        /*
        if(field=="first"){
            setFirst(value);
            return;
        }
        if(field=="second"){
            setSecond(value);
        }
        setEmail(value);
        
        */
         // more better is this using switch
         /*
         switch(field)
         {
            case "first":
            setFirst(value);
            return;

            case "second":
            setSecond(value);
            return;

            case "email":
            setSecond(value);
            return;
         }
         */
        // more best is always go with object 
        // by mapping method
        //    created the object refer 1 upper
    //      const set=Mapping[field];
    //      set(value);

    // }

    
//     return (
//         <div className="container">
//             <label>First name:</label>
//             <input onChange={(event)=>{
//                 forminputHandler("first",event.target.value);
//             }}
//             type="text" value={first} placeholder="john"/> 

//             <label>Second name:</label>
//             <input onChange={(event)=>{
//                 forminputHandler("second",event.target.value);
//             }} 
//             type="text" value={second} placeholder="chena"/>

//             <label>Email:</label>
//             <input onChange={(event)=>{
//                 forminputHandler("email",event.target.value);
//             }} 
//             type="text" value={email} placeholder="johnchena@110"/>
//         </div>
//     )
// }
// export default Complexformstate;

// ------------------------------------------------------------------
// one more ways is use the name attribute in form

// const Complexformstate=()=>{

//     const [first,setFirst] = useState("");
//     const [second,setSecond]=useState("");
//     const [email,setEmail]=useState("");

//         const Mapping={
//         first:setFirst,
//         second:setSecond,
//         email:setEmail,
//     };

//     const formhandler=(event)=>{
//         const field=event.target.name;
//         const value=event.target.value;
//         const set=Mapping[field];
//         set(value);
//     }
//     return (
//         <div className="container">
//             <label>First name:</label>
//             <input onChange={formhandler}
//              type="text" 
//              value={first} 
//              placeholder="john"
//              name="first"/> 

//             <label>Second name:</label>
//             <input onChange={formhandler} 
//              type="text" 
//              value={second} 
//              placeholder="chena"
//              name="second"/>

//             <label>Email:</label>
//             <input onChange={formhandler} 
//              type="text" 
//              value={email} 
//              placeholder="johnchena@110"
//              name="email"/>        
//         </div> 
//     )
// }

// export default Complexformstate;

// -----------------------------------------------------------------------
