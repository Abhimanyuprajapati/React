import React from "react";
import Header from "./header";
import Hero from "./hero";
import Card from "./card";
import data from "./data";

const informatin = data.map(item =>{
  return (
      <Card
        key={item.id}
        img={item.imge} 
        rating={item.rating}
        receive={item.receive}
        country={item.country}
        title={item.title}
        rupee={item.rupee}
        stock={item.stocks}
      />
  )
})

function SinglePage(){
    return (
       <div className="main-Page">
        <Header />
        <Hero />
        {informatin}
       </div>
    )
}


export default SinglePage