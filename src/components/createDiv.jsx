import { useState } from "react";

const CreateDiv=()=>{
    const [add,setAdd]=useState([]);

    const adder=()=>{
    //   const [value, setValue]=useState('')
    // return(
    //     setAdd( <div className="adder" style={{background: 'red', color: 'white', width:'200px', height:'200px' }}>{add}</div> )
    // )}
        if(add.length===0){
            setAdd([0]);
            return;
        }

        const last=add[add.length-1];
        const newone=last+1;
        setAdd([...add, newone]);
    }
    return (
        <div>
            <h1>click on the add button to add the div</h1>
            <div>
                <button onClick={adder}>+</button>
            </div>
            {add.map((elements)=>{
                return <div>{elements}</div>
            })

            }
        </div>
    );
};
export default CreateDiv;