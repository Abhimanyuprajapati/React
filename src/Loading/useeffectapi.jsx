import { useEffect, useState } from "react";
import Loader from "./loader";

const UseEffectApi=()=>{

  const [loading, setLoading] =useState(false);

  const [user,setUser]=useState([]);
    // useeffect take first arguments as a arrow function
    // useeffect take second arguments as a empty array
    useEffect(()=>{
        async function getdata(){
            setLoading(true);
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        setLoading(false);
        setUser(data);
        }
        getdata();
    },[])

    if(loading){
        return( <Loader />);
    }
    return(
        <>
            {/* <Loader /> */}
        </>
    )
};
export default UseEffectApi;