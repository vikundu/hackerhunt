import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import Topics from './Topics.js';
import axios from 'axios';
import { baseUrl } from './config.js';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      maxItem:'',
      data:[]
    }
  }
  
  componentDidMount(){
    
    let maxItemUrl = baseUrl+'maxitem.json';
    
    axios.get(maxItemUrl)
    .then(result => {
      
      this.setState({
        maxItem: result.data
      })
    })
    .then(()=>{
        this.showCards()
    })
    
  }
  
  showCards(){
  
    let maxItem = this.state.maxItem;
    let arr=[];
    
    for(let i=0;i<10;i++){
      
      let itemUrl = baseUrl+'item/'+(maxItem-i)+'.json';
      axios.get(itemUrl)
      .then(result => {
        arr.push(result.data);
      });
    }
    this.setState({
      data:arr
    });
  }
  
  render() {
    
    console.log("in app: ",Object.keys(this.state.data));
    return (
      <div>
        <Card data={this.state.data}/>
        
        <Topics/>
      </div>
    );
  }
}

export default App;
