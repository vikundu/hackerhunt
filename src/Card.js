import React, { Component } from 'react';


class Card extends Component {
    
    constructor(props){
        super(props);
    }
    
    cardListItem(){
        
        //console.log("here",this.props.data);
        
        return (
            this.props.data.map((d, i) =>
                <li key={i}><pre>{JSON.stringify(d, null, 2)}</pre></li>
            )
        )
    }
    
    render(){

        console.log(this.props)

        return(
            <div {...this.props}>
            <ul>
                {this.cardListItem()}
            </ul>
            </div>
        );
    }
}

export default Card;