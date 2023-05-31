import { useEffect, useState } from "react";
/*
    what is  the wrong withthis is we get data again and again 
*/

/*
function UseEffect(){
    // example of Promise  based approach
    const[count,setCount]=useState(0);

        const addedone=()=>{
            return setCount(count+1);
        }
    function getuserdata(){
        // useEffect()
                // always fetch returns Promise to us
                // .then give back to resolved value
                // response.json give return to new Promise
        fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
        });
    }
    getuserdata();


    return(
        <div>
            <h1>count: {count}</h1>
        <button onClick={addedone}>
            add me
        </button>
        </div>
    )
};
export default UseEffect;
*/

// this is the best method of useEffect
/*
function UseEffect(){
    const[count,setCount]=useState(0);
    const addedone=()=>{
        return setCount(count+1);
    }

    useEffect(()=>{
        function getuserdata(){
            fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{
                return response.json();
            }).then((data)=>{
                console.log(data);
            });
        }
        getuserdata();
    },[]);

    return(
        <div>
            <h1>count: {count}</h1>
        <button onClick={addedone}>
            add me
        </button>
        </div>
    )
};
export default UseEffect;
*/

// eg
function UseEffect(){
    const[count,setCount]=useState(0);
    const addedone=()=>{
        return setCount(count+1);
    }
    const [user,setUser]=useState(null);

    useEffect(()=>{
        function getuserdata(){
            fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{
                return response.json();
            }).then((data)=>{
                console.log(data);
                setUser(data);
            });
        }
        getuserdata();
    },[]);

    // if user is null
    if(!user){
        return<h1>data not found yet...</h1>
    }
    
    return(
        <div>
            <h1>{user.email}</h1>
            <h1>count: {count}</h1>
        <button onClick={addedone}>
            add me
        </button>
        </div>
    )
};
export default UseEffect;