import React, { Component } from "react";
// import axios from "axios"

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
            alert(`${JSON.stringify(this.state)} Registered Successfully !!!!`)
            console.log(this.state);
            
            // axios.post("http://127.0.0.1:5000/memes", this.state, {mode: 'no-cors'})

            const requestOptions = {
                method: 'POST',
                mode: "no-cors",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            };
            fetch('http://127.0.0.1:5003/memes', requestOptions)
            // .then(response => console.log(response))
            // .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }))
            
            this.setState({
                "name": "",
                "caption": "",
                "url": "",
            })
    
                window.location.reload();
             

         event.preventDefault()
            
        }
    

    render(){
        return(
        <div>
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


// class Form extends Component{
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: "",
//             caption: "",
//             url: ""
//         }
//         this.handleSubmit.bind(this)
//     }
    
//     namehandler = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     captionhandler = (event) => {
//         this.setState({
//             caption: event.target.value
//         })
//     }
//     urlhandler = (event) => {
//         this.setState({
//             url: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         console.log("hello")
//         alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
//         console.log(this.state);
//         this.setState({
//             name: "",
//             caption: "",
//             url: "",

//         })
//      event.preventDefault()
        
//     }


// render(){
//     return(
//     <div>
//         <form action="">
//             <label htmlFor="name">Name :</label>
//             <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="name..." /><br/>

//             <label htmlFor="caption">Caption :</label>
//             <input type="text" value={this.state.caption} onChange={this.captionhandler} placeholder="caption..." id="caption" name="caption"/><br/>
            
//             <label htmlFor="url">URL :</label>
//             <input type="url" value={this.state.url} onChange={this.urlhandler} placeholder="url..." id="url" name="url" /><br/>

//             <input type="submit" value="submit"/>

//         </form>
//     </div>
// )
//     }
// }

// export default Form