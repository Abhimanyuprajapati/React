                    //     context Provider
/*
1. Create the context
        (
            import { createContext } from "react";
            const UserDetailContext=createContext(); 
        )

2. Create the provider
        (
        <UserDetailContext.Provider value={userdetail}>
        <App>
        </App>
        </UserDetailContext.Provider>  
        )
3. Consume the context
(
        import { useContext } from "react";
        const contextValue= useContext(UserDetailContext)
)
*/
import { useContext } from "react";
import { createContext } from "react";    // this is a function (createcontext is a function)

const ComponentsC=()=>{
    const contextValue= useContext(UserDetailContext)
    console.log(contextValue);
    return(
        <>
         <h3>This is the components C</h3>
         <h1>{contextValue.name}</h1>
         <h1>{contextValue.rollno}</h1>
         <h1>{contextValue.studentId}</h1>
         <h1>{contextValue.state}</h1>
        </>
    )
};

const ComponentsB=()=>{
    return(
        <>
         <h3>This is the components B</h3>
         <ComponentsC/>
        </>
    )
};

const ComponentsA=()=>{
    return(
        <>
        <h3>This is the components A</h3>
        <ComponentsB />
        </>
    )
};

const UserDetailContext=createContext();   // any name
// createContext return an object to us
// UserDetailContext=UserDetailContext.Provider   == this is react components
// Provider take a value Props 

export const Context_Provider = () => {
    const userdetail={
        name:"abhimanyu",
        rollno:54,
        studentId:20152,
        state:"up"
    };

  return (
    <>
    <UserDetailContext.Provider value={...userdetail}>
    <div>This is called use context Provider  </div>
    <ComponentsA />
    </UserDetailContext.Provider>
    </>
  )
}
