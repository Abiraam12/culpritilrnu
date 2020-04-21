import React from 'react';
// import Trainee from '../../images/bradley.jpg'
// import './TrainerResult.css';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm';
import { Card,Rate,Row,Col,Icon,Button } from 'antd';
import AddFavourite from '../AddFavourite/AddFavourite';
import { Route,Redirect,Link } from 'react-router-dom';


var Trainee=require("../../images/bradley.jpg");





export default class TrainerResult extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
            favtrainer:false,
            add_fav_id: "",
            arrowstate:false
        }
    }

    addfav_trainer = (event) => {
        
        const {trainer_details} = this.state;
        const {trainerId} =  event.currentTarget.dataset
        
       
        const details = trainer_details.find(item => item.id == trainerId)
        


        console.log("props details",details)

       
           this.setState({
            favtrainer:true,
            add_fav_id: details
        })
  
     

       
    }

   
    render(){
        
        console.log("get id",this.state.add_fav_id)
        const params = {
               slidesPerView:'auto',
              spaceBetween:1,
              freeMode:true,
              observer:true,
              pagination:{
                el:'.swiper-pagination',
                clickable:true,
              },
            };
        return(
            <div>
                 <div className="trainer-title">
                      <h3 className="trainer-title__text">Search your Trainer</h3>
          
              </div>
                <div className="__trainer-result-category">
                    Search Results <span style={{color:"gray",fontSize:"4vw"}}>Professional Trainer </span>
                </div>
            <div class="trainer-card ">
           
        
     <Swiper  {...params}  modules={[Navigation]}>
      {this.state.trainer_details.map((detail,i) =>
      <div>
      <Card className="trainer_swiper_parent"
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
      >
      <div className="trainer_swiper_div" style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      
      
      <Row gutter={24}>
      <Col className="gutter-row" span={14} style={{textAlign:"left"}}>
      <Rate  className="ratecolor" allowHalf defaultValue={4} />
      </Col>
      
      </Row>
      </div>

      <label className="lable_radio" for={'radiomob'+i}>

    

      <div className="trainer_img-div" style={{flex:.7,marginTop:'5px',borderRadius:'50px'}} >
             <img  src={detail.img.Trainee} alt="Arrow Text" class="trainer_result_img"/>
      </div>

      <div  style={{fontSize:"22px",display:"flex",flexWrap:"wrap", textAlign:"left"}}>
      <div>
            <div className="trainer_price">{detail.price}</div>    
            <div className="text_size-1">{detail.name}</div>
            <div className="text_size-2">{detail.designation}</div>
            <div className="trainer_location">{detail.location}</div>
      </div>

      </div>
      <div className="Linebefore"></div>
      </label>
  

      </div>
      <div>
      
    </div>    
    
        <div className="more_details_main" style={{display:'flex',justifyContent:'flex-end'}}>  
                 
       

            <div style={{display:"flex",justifyContent:"flex-End"}} >            
                        
                <button className="trainerfav_bookbutton" data-trainer-id={detail.id}  onClick={this.addfav_trainer} >Book Trainer</button>
            </div>

        

            </div>  

    
      </Card>

        
     

      </div>
     
       )}
    

    </Swiper>
    { this.state.favtrainer &&
                 <Redirect push to={`/moredetailstrainer/${this.state.add_fav_id.id}`} />
                
            }

            </div>
            
            </div>
            
        )
    }
}

