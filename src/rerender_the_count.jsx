import { useEffect,useState  } from "react";

const Rendercount=()=>{
    const [count, setCount]=useState(10);

    useEffect(()=>{
        setInterval(()=>{
            setCount((prev)=>prev-1)
        },1000);
    },[]);
// console.log(count);

    return(
        <main>
             <h1>count : {count}</h1>
        </main>
    );
};
export default Rendercount;