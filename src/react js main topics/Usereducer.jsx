import { useReducer,useState } from "react";
// import { useState } from "react";
        //   by using usereducer 
//            this is by using usestate
/*
function Usereducer(){
    const [count, setCount]=useState(0);
    const increment=()=>{
        setCount((prev)=>prev+1);
    }
    return (
        <main>
            <h1>count : {count}</h1>
            <button onClick={increment}>increment ++</button>
        </main>
    );
};
export default Usereducer;
*/
                            //   this is by useReducer
const initial={
    count:0,
}
const reducer=(state,action)=>{
    if (action.type==="increment"){
        return{count:state.count+1}
    }
    return state;
}
function Usereducer(){
    // compare to useState 
    // eg.const [state, setState]=useState(value);

    const [state, dispatch]=useReducer(reducer,initial)
    const increment=()=>{
        const action={type:"increment"};
        dispatch(action);
    }
    return (
        <main>
            <h1>count : {state.count}</h1>
            <button onClick={increment}>increment ++</button>
        </main>
    );
};
export default Usereducer;