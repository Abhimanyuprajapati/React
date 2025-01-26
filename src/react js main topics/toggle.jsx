import { useState } from "react";

const Toggle=()=>{
    const [dark, setDark]=useState(false);
    const darktheme=()=>{
alert("hii");
    }
    return (
        <>
         <h1>abhimanyu</h1>
         <button onClick={darktheme}>Dark Theme</button>

         <div>
            <p style={{padding:"50px", backgroundColor:"orange"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Enim recusandae excepturi dignissimos iste id deleniti esse 
                 libero doloremque, eaque doloribus. Pariatur, beatae animi eaque at 
                 dolorum laudantium quibusdam sequi. Repellendus.
            </p>
         </div>
        </>
    )
}
export default Toggle;