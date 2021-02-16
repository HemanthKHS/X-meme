import React from "react";
import Form from "./Form"
import '../app.css'

function Navbar(){

    return(
        <div className="Navbar" >
            <div className="Heading_space">
                <h1 className ="Heading_space_h1" >X-Meme</h1>   
            </div>
            <Form/>
        </div>
    )
    }

export default Navbar