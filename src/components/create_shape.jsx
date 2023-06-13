import { useState } from "react";
import "../css/style3.css";
/*
We will be building an app that enables users to create a shape.
Inside div#shape-creator, add a select tag
with two options,
1. "Square"
2. "Circle"

The default selected option should be "Square".

Add a button with the text "Add shape". When this button is clicked, the selected shape should be displayed in the div#shapes-holder.

If the selected shape is "Square", a div with class="square" should be added on button click

If the selected shape is "Circle", a div with class="circle" should be added on button click


*/
const CreateShape=()=>{
    const [add,setAdd]=useState([])
    const [Isshape,setIsShape]=useState("square")
    function adder(){
        setAdd([...add, Isshape]);

        // if(add.length===0){
        //     setAdd([0])
        //     return;
        // }
        // const last=add[add.length-1];
        // const next=last+1;
        // setAdd([...add,next]);  
    }
    return(
        <div className="order">
            <h1>create a shape</h1>
            <select onChange={(event)=>{
               setIsShape(event.target.value);
            }}
            value={Isshape}
            >
                <option value="square">square</option>
                <option value="circle">circle</option>
            </select>
            {"  "} 
            <button onClick={adder}>Add Shape</button>
            {add.map((shape,index)=>{
                return(<div className={`${shape}`}>
                    {index}
                    </div>
                )
            })}
        </div>
    );
};
export default CreateShape;