import React, { Component } from "react";

    class Form extends Component{
        constructor(props) {
            super(props)

            this.state = {
                "name": "",
                "caption": "",
                "url": ""
            }
            this.handleSubmit.bind(this)
        }
        
        namehandler = (event) => {
            this.setState({
                name: event.target.value
            })
        }
        captionhandler = (event) => {
            this.setState({
                caption: event.target.value
            })
        }
        urlhandler = (event) => {
            this.setState({
                url: event.target.value
            })
        }
    
        handleSubmit = (event) => {
            console.log("hello")
            alert(`${JSON.stringify(this.state.name)} Meme Saved Successfully !!!!`)            

            const requestOptions = {
                method: 'POST',
                mode: "no-cors",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            };
            fetch('https://x-meme-khs.herokuapp.com/memes', requestOptions)
            .then(a =>
            this.setState({
                "name": "",
                "caption": "",
                "url": "",
            }))
            .then(b => window.location.reload())
    
            
             

         event.preventDefault()
            
        }
    

    render(){
        return(
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="name..." /><br/>

                <label htmlFor="caption">Caption :</label>
                <input type="text" value={this.state.caption} onChange={this.captionhandler} placeholder="caption..." id="caption" name="caption"/><br/>
                
                <label htmlFor="url">URL :</label>
                <input type="url" value={this.state.url} onChange={this.urlhandler} placeholder="url..." id="url" name="url" /><br/>

                <input type="submit" value="submit"/>

            </form>
        </div>
    )
        }
    }

export default Form


