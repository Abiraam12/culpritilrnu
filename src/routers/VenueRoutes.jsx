import React from 'react';
import ListVenue from '../ListVenue';
import DisplayTabDetails from '../DisplayTabDetails';
import ListVenueHomeRouter from '../ListVenueHomeRouter';
import Defaultheader from '../Defaultheader';
import VenueHeader from '../VenueHeader';
import ListTraining from '../ListTraining';
import TrainerSearch from '../components/trainerSearch/TrainerSearch';

import { BrowserRouter, Link, Route,Switch  } from 'react-router-dom';


export default class VenueRoutes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            breadCrums:""
        }
    }
    changeHome=(data)=>{
        // alert("hiii");    
            this.setState({breadCrums:data});
            console.log("sdfsdfffffffffffffff",data)
          }
    render() {
        return (
           
             <>
               
               <div className="webmodules">
                       <Defaultheader switchRoute={(data)=>this.setState({userType:1})} />
                </div>
                <VenueHeader showlisthome={this.showlisthome} showBreadCrums={this.state.breadCrums}/>

               <Switch>  
                <Route path="/" exact render={(props) => <DisplayTabDetails {...props} someProp={this.changeHome}/>} />
                <Route path="/home" render={(props) => <ListVenueHomeRouter {...props} someProp={this.changeHome}/>}  />
                <Route path="/listmyvenue" render={(props) => <ListVenue {...props} someProp={this.changeHome}/>} />
                <Route path="/home" render={(props) => <ListVenueHomeRouter {...props} someProp={this.changeHome}/>}  />
                <Route path="/listmytraining" exact component={ListTraining} />
                <Route path="/searchtrainer" component={TrainerSearch} />
            </Switch>
                </>
           
        );
    }
}