import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import Topics from './Topics.js';
import axios from 'axios';
import { baseUrl } from './config.js';
import Promise from 'bluebird'


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
  
  async showCards(){
  
    let maxItem = this.state.maxItem;
    
    const urlList = []

    for(let i=0;i<10;i++){      
      urlList.push(baseUrl+'item/'+(maxItem-i)+'.json');
    }

    const arr = await Promise.map(
      urlList,
      async url => (await axios.get(url)).data
    )

    // axios.get(itemUrl)
    // .then(result => {
    //   arr.push(result.data);
    // });


    this.setState({
      data:arr
    });
  }
  
  render() {
    
    console.log("in app: ",Object.keys(this.state.data), this.state.data);
    return (
      <div>
        <Card data={this.state.data}/>
        
        <Topics/>
      </div>
    );
  }
}

export default App;
