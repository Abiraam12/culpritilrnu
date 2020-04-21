import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import MyCalendar from '../components/MyCalendar/MyCalendar'
import myvenues from '../components/MyVenues/myvenues';

export default class DropdownRoutes extends React.Component{
 
    render(){
        console.log("dropdown routes",this.props)
        return(
            <div>
              <Route path="/myvenues" component={myvenues} />
              <Route path="/mycalendar" component={MyCalendar} />
            </div>
        )
    }
    
}