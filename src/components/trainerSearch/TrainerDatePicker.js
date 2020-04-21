import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
 
  
} from '@material-ui/pickers';
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import moment from 'moment';


export default class TrainerDatePicker extends React.Component {
  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  state={
    selectedDate: moment()
  }

   handleDateChange = date => {
    this.setState({
      selectedDate:date
    })
  };

  render(){

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      
        <DatePicker
            disableToolbar
            variant="inline"
            title="choose"
            value={this.state.selectedDate}
            format="dd MMM"
            onChange={this.handleDateChange}
      />
    
       
      </Grid>
    </MuiPickersUtilsProvider>
  );
        }
}
