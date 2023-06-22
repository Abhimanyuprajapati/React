import React from 'react';     // default export
import {createRoot} from 'react-dom/client';   // name export { }
import App from './App';
// import "./style.css";    ---------------------// project 1
// import "./project2/style1.css";  -------------// project 2   
// import "./project3/style.css";   ---------------//project3   
import "./project5/style.css"; 


const container = document.querySelector("#root");     // targeting the root id 
const root= createRoot(container);                     // creatRoot is the syntax

root.render(<App />);                                  // rendering the app