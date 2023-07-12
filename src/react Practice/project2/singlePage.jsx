import React from "react";
function Button(){
    return(
        <dir className="button-style">
            <button>Email</button>
            <button>LinkedIn</button>
        </dir>
    )
}

function Main(){
return (
    <div className="main-one">
        <h1>About</h1>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h1>Interested</h1>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
)
}

function Header(){
    return (
        <div>
             <img src=".\src\project2\img\img1.svg"></img>
             <h1>Laura Smith</h1>
             <p>Frontend Developer</p>
             <p>laurasmith.website</p>
        </div>
    )
}

function Single(){
    return (
        <div className="head">
            <Header />
             <Button />
             <Main/>
        </div>
    )
}

export default Single;