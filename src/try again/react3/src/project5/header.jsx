import React from "react";
import memedata from "./memedata";
import { useState } from "react";

// meme website is http://apimeme.com/create/1950s-Middle-Finger
function Headerone(){
    return (
    <div className="meme-logo">
            <img className="img1" src="./src/project5/img1.svg" alt="logo" />
            <h1>Project 1</h1>
        </div>
    );
}

function HeaderTwo(){
   
    return (
        <div>
           <form className="form">
                <input className="form-input" type="text" placeholder="top text" />
                <input className="form-input" type="text" placeholder="bottom text" />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
           </form>
        </div>
    );
}

function ImgLoad(){
    return (
        <div className="imgload">
            <img src={image} alt="img" className="memeImage" />
        </div>
    );
}

const [image,setImage]=useState("https://i.imgflip.com/30b1gx.jpg");
// const getMemeImage=()=>{
//     const dataImg=memedata.data.memes;
//     const randomNumber=Math.floor(Math.random()*dataImg.length);
//     setImage(dataImg[randomNumber].url);
// }
// let url;
// var dataImg=[];
// function getMemeImage() {
    // aaa=memedata.data.memes;
    // console.log(aaa);
    //  dataImg=memedata.data.memes;
    //  const [image, setImage]=useState("")
    //  const randomNumber=Math.floor(Math.random()*dataImg.length);

    //  setImage = dataImg[randomNumber].url;
    // console.log(dataImg);
    /*
    const randomNumber=Math.floor(Math.random()*dataImg.length);

    url = dataImg[randomNumber].url;
    console.log(url);
    console.log(randomNumber);
    */
    //  url=dataImg[randomNumber].url;
    // console.log(url);
// }
// getMemeImage();


function Header(){
    return (
        <div >
          <Headerone />
          <HeaderTwo />
          <ImgLoad />
        </div>
    );
}

export default Header;
