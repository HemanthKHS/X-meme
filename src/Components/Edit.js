import React, { Component } from "react";
import '../app.css'


class Edit extends Component{


    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          ttt: [],
          items: []
        };
      }
    
      async componentDidMount() {


        const response = await fetch("http://127.0.0.1:5003/memes",{
                    method: 'GET'})
        const result = await response.json();  
       
        
        
        //   .then((res) => res.json())
        //   .then(
            // (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
              console.log(this.state.items[0].name)
        //     },

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            // (error) => {
            //   this.setState({
            //     isLoaded: true,
            //     error
            //   });
            // }
        //   )
      }

    // constructor(){
    //     super();
        // api.get("").then(res => {
        //         console.log(res.data)
        // this.State={
        //     data:"ssss"
        // }
        // }
    

    // componentWillMount() {
    //     const requestOptions = {
    //         method: 'GET',
    //         mode: "no-cors",
    //         // headers: { 'Content-Type': 'application/json' },
    //     }
    //     fetch('http://127.0.0.1:5000/memes', requestOptions).then(response => console.log("---->", response))
    //                 // .then(t => console.log("----->",t));
    //     // let json = await response.json();
    //     console.log("=====> ", this.state);
    // }
  

    render() {
        if (true) {
            return(
            <div className="Memespace" >
                {this.state.items.map(item => (
                    <div className="Meme" key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.caption}</p>
                        <img src={item.url} alt="Unable to Load"/>
                
                    </div>
                    ))}

            </div>
            );
        }
    }

}

export default Edit