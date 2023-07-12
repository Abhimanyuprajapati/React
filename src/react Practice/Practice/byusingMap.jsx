import React from "react";
const Header= ()=>{
    
    const students=[
        {
            id:1,
            name:"akansha",
            score:99,
        },
        {
            id:2,
            name:"vivek",
            score:78,
        }, 
        {
            id:3,
            name:"vinod",
            score:40,
        }, 
        {
            id:4,
            name:"manu",
            score:69,
        }, 
        {
            id:5,
            name:"akash",
            score:100,
        }
    ];
return (
    <div>
        {
            /*
            // by using the map function
            students.map((item) => {
               return <div>
                    <h1>{item.name}</h1>
                    <p>{item.score}</p>
                </div>
            })
            */
            // by using filter function
            /*
            students.filter((item)=>{
              return  item.score>=70;
            }).map((item)=>{
                return <div>
                <h1>{item.name}</h1>
                <p>{item.score}</p>
                </div>
            })
            */
            // have the score is greater than 50% is pass else fail 
            students.map((item)=>{
                const scoress=item.score>=50 ? <div>
                <h1>{item.name}</h1>
                <p>{item.score}</p>
                <p>Pass</p>
                </div> : <div>
                <h1>{item.name}</h1>
                <p>{item.score}</p>
                <p>fail</p>
                </div>
                return scoress;

            })
        }
    </div>
);
    }
export default Header;