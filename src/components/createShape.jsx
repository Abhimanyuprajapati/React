import React, { useState } from "react";
const CreateShape=()=>{
    const [shape, setShape]=useState([])
    const [isShape, setIsShape]=useState("square");
    function add(){
        setShape([...shape, isShape])
        // if(shape.length===0){
        //     setShape([0]);
        //     return;
        // }
        // const last=shape[shape.length-1];
        // console.log(last);
        // const next=last+1;
        // console.log(next);
        // console.log(shape);
        // setShape([...shape,next]);
    }
    return(
        <div>
            <h1>This is to create the shape</h1>
            <select onChange={(event)=>{
                setIsShape(event.target.value);
            }} value={isShape}>
                <option value="circle">circle</option>
                <option value="square">square</option>
            </select>
            <button onClick={add}>click me</button>
            {shape.map((index,value)=>{
                return(<div className={`${value}`}>{index} {value} </div>)
            })}
        </div>
    );
};
export default CreateShape;