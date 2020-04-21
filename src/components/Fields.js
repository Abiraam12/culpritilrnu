import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import { DatePicker} from 'antd';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const initialState = {
	    Name:"",
		Description:"",
		nameError:"",
        descriptionError:" ",
        Check: false,

}
class Fields extends Component{
    state = initialState
    validate =() =>{
        let nameError = ""
        let descriptionError = ""
        
		if(!this.state.Name){
			nameError =" please enter Valid Name"	
		}
		if(!this.state.Description){
			descriptionError =" Cannot be Blank"
		}
        if(nameError || descriptionError){
            this.setState({
	            nameError,descriptionError
    })
        return false
}
		return true;
		
	};

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log("dfsd",this.state)
    }

    handleChangeCheck = event => {
        this.setState({
            Check : event.target.checked
        })
        console.log(this.state.Check)
    }
    handleSubmit = event => {
        alert("clicked")
		event.preventDefault();
		const isValid =this.validate();
		if(isValid){
			console.log(this.state)
			this.setState(initialState)
		}
		
	}
    render(){
        return(
            <div style = {{marginLeft: "-54px"}}>
            <form name="submit" onSubmit={this.handleSubmit} >
            <div>  <h4 className="head">Deals</h4> </div>
            <div className="pane">
                <div className="line">   
                    <Grid container spacing={4}>
                        <Grid items md={3}>
                        <TextField className=" first"
                            value={this.state.Name}
                            onChange={this.handleChange}
                            label="Name"
                            name="Name"
                            placeholder="Placeholder"
                            margin="normal"
                            variant="outlined"  />  
                             <div className="error">{this.state.nameError}</div>
                        </Grid> 
                        <Grid items md={3}>
                        <DatePicker className="two"
                            label="Deal Date"
                            value={this.state.startDate} 
                            onChange={this.handleChange}
                            name="startDate" />
                         </Grid>
                        <Grid items md={3}>
                        <DatePicker  className="two"
                            label="Deal Date" />
                        </Grid>
                        <Grid items md={3}>
                        <FormControl component="fieldset">
                        <FormControlLabel
                            value={this.state.Check} 
                            checked={this.state.Check}
                            onChange={this.handleChangeCheck}
                            name="Check"
                            control={<Checkbox color="primary" />}
                            label="Active"
                            labelPlacement="top" /> 
                            </FormControl >
                        </Grid>
                        </Grid> 
                        </div>
                        <div>
                        <Grid container spacing={12} >
                        <Grid items md ={12}>
                        <TextField className="last"
                            value={this.state.Description}
                            onChange={this.handleChange}
                            name="Description"
                            label="Description"
                            placeholder="Placeholder"
                            margin="normal"
                            variant="outlined" />
                             <div className="error">{this.state.descriptionError}</div>
                        </Grid>
                        </Grid> 
                        <div className="tons">
                        <Button className="but" variant="contained">Cancel</Button>
                        <Button className="butt" type="submit" variant="contained" color="primary">Submit</Button>
                        </div>
                        </div>
            </div>
            </form>
            </div>
        )
    }
}


export default Fields