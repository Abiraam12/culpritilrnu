import React from 'react';
import { Rate,Row,Col } from 'antd';
import trainer from '../../images/bradley.jpg'
import { Checkbox } from 'antd';
import _ from 'lodash';
import { notification, Icon } from 'antd';
// import FavNotifications from './FavNotifications/FavNotifications';
import './AddFavourite.css';
import Bookatrainer from '../bookyourtrainer/Bookatrainer';

var Trainee=require("../../images/bradley.jpg");




export default class AddFavourite extends React.Component {
  constructor(props){
    super(props)
    this.state={
        favstate:true,
        trainer_details:[{
          id:1,
          name:"John",
          img:{Trainee},
          designation:"Software Trainer",
          price:"$100/day",
          location:"Chennai"
      },{
          id:2,
          name:"Kishore",
          img:{Trainee},
          designation:"BFSI Trainer",
          price:"$150/day",
          location:"Koramangala"
      },{
          id:3,
          name:"Arjun",
          img:{Trainee},
          designation:"Software Trainer",
          price:"$200/day",
          location:"Chennai"
      },{
          id:4,
          name:"Cobb",
          img:{Trainee},
          designation:"Math Tutor",
          price:"$100/day",
          location:"Mumbai"
      },{
              id:5,
              name:"Wozniak",
              img:{Trainee},
              designation:"Swift Tutor",
              price:"$120/day",
              location:"Kolkata"
          
      }],
      more_details:"",
      test:"",
      trainermodal:false
       
    }
  
   
  }
 
 
 

   FavNotifications = () => {

    this.setState({
      favstate:!this.state.favstate
    });

    notification.open({
    message: this.state.favstate ? 'Added' : 'Removed' ,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: this.state.favstate ?  <Icon type="smile" style={{ color: '#108ee9' }} /> : <Icon type="smile" rotate={180} style={{ color: '#108ee9' }} />,
  })
  
  
};

 bookTrainer = () => {
   this.setState({
     trainermodal:true
   })
 }


  render(){
     console.log("names",this.state.more_details)
    
  return (
   
      
       <div>
         
        
            <div className="Add_favourite_main">
                <div className="Add_fav_main" style={{padding:"15px"}}>
                          <div className="Trainer_div1">
                                 <div className="Trainerfav_name">{this.state.test.name}|<span style={{color:"#fe9101"}}>{this.state.test.designation}</span></div>
                                     <div onClick={this.FavNotifications}>
                                            <Rate count={1}/>
                                    </div>
                          </div>
             <div className="Trainer_div2">
               <div style={{width:"40%"}}><img className="Trainerfav_img" src={trainer}/></div>
               <div className="trainerfav_description">
       <div className="trainerfav_name2">{this.state.test.price}<span style={{marginLeft:"5px",color:"#fe9101"}}>{this.state.test.location}</span></div>
                 <div className="trainerfav_info">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</div>
               </div>
             </div>
             <div className="Trainer_div3">
               <div>
               <Row gutter={24}>
                   <Col className="gutter-row" span={14} style={{textAlign:"left"}}>
                      <Rate  className="ratecolor" allowHalf defaultValue={4} />
             </Col>
             
             </Row>
               </div>

       
   
        <div style={{display:"flex",justifyContent:"flex-End"}}><button className="trainerfav_bookbutton" onClick={this.bookTrainer}>Book Trainer</button></div>
      </div>
      </div>

      <div className="Add_fav_list">
        <div className="Add_fav_option"><Checkbox className="chkbx">{`Hourly Package`}</Checkbox><span>{`250INR`}</span></div>
        <div className="Add_fav_option"><Checkbox className="chkbx">{`Per Day`}</Checkbox><span>{`50INR`}</span></div>
        <div className="Add_fav_option"><Checkbox className="chkbx">{`Weekly`}</Checkbox><span>{`150INR`}</span></div>
        <div className="Add_fav_option"><Checkbox className="chkbx">{`Monthly`}</Checkbox><span>{`220INR`}</span></div>
        <div className="Add_fav_option"><Checkbox className="chkbx">{`Door Step`}</Checkbox><span>{`90INR`}</span></div>
        <div className="Add_fav_option"><Checkbox className="chkbx">{`Materials`}</Checkbox><span>{`110INR`}</span></div>
      </div>
    
    </div>
  )
  {
      this.state.trainermodal && 
          <Bookatrainer visible={this.state.trainermodal}/>
    }
    </div>
  
  );
}

componentDidMount(){
  console.log("component props",this.props)
  var testing =  this.state.trainer_details.filter((det) => det.id == this.props.match.params.trainerId).map(test => {
    this.setState({
      test
    })
})

console.log("construct props testing",this.state.more_details)
 


}
}


