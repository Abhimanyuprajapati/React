import React from "react";

export default function Card(props){
   
    return (
        <div className="flex">
            <div className="card">
               {/* { props.stock === 0 && <div className="card-batch">Sold Out</div>} */}
                <img src={props.img} alt="photo"  className="photo" />
                <div className="card-star">
                    <img src="..\src\project3\img\star-solid.svg" alt="" className="star" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.receive}) </span>
                    <span className="gray"> . {props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.rupee}</span> / person</p>
            </div>
        </div>
    )
}