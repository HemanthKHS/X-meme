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


        const response = await fetch("https://dreamy-tereshkova-401f87.netlify.app/",{
                    method: 'GET'})
        const result = await response.json();  
       
              this.setState({
                isLoaded: true,
                items: result.items
              });
              console.log(this.state.items[0].name)

      }

      
  

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