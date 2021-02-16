import React, { Component } from "react";
import '../app.css'


class Memespace extends Component{


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


        const response = await fetch("https://x-meme-khs.herokuapp.com/memes",{
                    method: 'GET'})
        const result = await response.json();  
       
        
              this.setState({
                isLoaded: true,
                items: result.items
              });
      
      }

      handleEdit = (event) => {

      }
  

    render() {
        if (true) {
            return(
            <div className="Memespace" >
                {this.state.items.map(item => (
                    <div className="Meme" key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.caption}</p>
                        <img className="meme_img" src={item.url} alt="Unable to Load"/>
                
                    </div>
                    ))}

            </div>
            );
        }
    }

}

export default Memespace