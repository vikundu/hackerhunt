import React, { Component } from 'react';


class Card extends Component {
    
    constructor(props){
        super(props);
    }
    
    cardListItem(){
        
        //console.log("here",this.props.data);
        
        return (
            this.props.data.map(d=> {
                <li>avc</li>    
        })
        )
    }
    
    render(){
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