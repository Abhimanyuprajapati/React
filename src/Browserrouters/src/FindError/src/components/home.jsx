import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate=useNavigate()
    useEffect(()=>{
        (async()=>{
            const response=await fetch();
            if(!response.ok){
                navigate('error')
            }
            const data=await response.json();
            navigate('Card')
        })();
    },[])
    return (
        <>
         <div>This is the Home page</div>
         <button onClick={()=>{
            // push a new route to the stack
            // navigate to the error page with no back button
            // replace a new route
            //  navigate('error',{replace : true});
            navigate('error')
         }}>click me </button>
        </>
    )
  }
  export default Home

//    navigate(-1) this will indicate that we go one page back 