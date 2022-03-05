import {useState} from "react";

const ImageHandling =() =>{
    
    
    const [bg,setbg]= useState("https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHw%3D&w=1000&q=80");
        const bgChange =()=> {
         console.log("clicked");
    
         
         setbg("https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=");  
        
        }
        return(
            <div className="container mt-5">
            <h1>Image Handling</h1>
            <button onClick={bg} className="btn btn-outline-primary">
                click it
            </button>
            <button onClick={bgChange} className="btn btn-outline-primary">
                press it
            </button>
            </div>      
        );
        
    };
    
    export default ImageHandling;
            
              
   

  