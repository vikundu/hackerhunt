import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { baseUrl } from './config.js';


class Cards extends Component {
    
    constructor(props){
        super(props);
        this.cardListItem = this.cardListItem.bind(this);
    }
    
    cardListItem =()=>{
        
        if(!this.props.loading){
            return this.props.data.map((d,i) => {
                console.log(d.data);
                if(d.data && d.data.text){
                return <li key={i}>
                    <Card>
                        <CardContent>
                          <Typography color="textSecondary">
                            {d.data.by}
                          </Typography>
                          <Typography variant="headline" component="h2">
                            <div maxLength="200" dangerouslySetInnerHTML={{__html:(d.data.text)}} />
                            
                          </Typography>
                          <Typography color="textSecondary">
                            type: {d.data.type}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" onClick={()=> window.open(baseUrl+'item/'+d.data.id+'.json', "_blank")}>Learn more</Button>
                        </CardActions>
                    </Card>
                </li>
                }else{
                    return true;
                }
            })
        }else{
            return;
        }
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

export default Cards;