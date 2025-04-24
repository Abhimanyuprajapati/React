
import react, { useState } from 'react';

export const Counter = () => {
    // const [number, setNumber]= useState(0)
    // const [increment, setIncrement]= useState()
    // const [decrement, setDecrement]= useState()




const [history, setHistory]= useState([0]);
const [position, setPosition] = useState(0);

const currentValue = history[position]

console.log(currentValue);

const addValueToHistory = (newvalue) =>{

const newHistory = history.slice(0, position+1)
setHistory([...newHistory, newvalue]);
setPosition(position+1)
}

    const handleDecrement = ()=>{
        addValueToHistory(currentValue-1)
    }

    const handleIncrement = ()=>{
        addValueToHistory(currentValue + 1)
    }

    const undo = ()=>{
        if(position>0){
            setPosition(position-1)
        }
    }

    const redo = ()=>{
        if(position<history.length-1){
            setPosition(position+1)
        }
    }

    console.log(history, position);
    return (
        <>
            <div >
                <h1>
                    counter with undo and redo history
                </h1>
                <br />


<div style={{display:"flex"}}>
<button onClick={handleDecrement}>-</button>
{currentValue}

<button onClick={handleIncrement}>+</button>
</div>


<div>
    <button onClick={undo} disabled={position === 0}>undo</button>

    <h1>
        {position + 1}/ {history.length}
    </h1>
    <button onClick={redo} disabled={position === history.length-1}>redo</button>
</div>

            </div>
        </>
    )
}