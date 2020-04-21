import React from 'react';
// import Trainee from '../../images/bradley.jpg'
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm';
import { Card,Rate,Row,Col,Icon  } from 'antd';
import '../TrainerResult/TrainerResult.css';
import './NearByTrainers.css';


var Trainee=require("../../images/bradley.jpg");





export default class NearByTrainers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            trainer_details:[{
                id:1,
                name:"Angelina",
                img:{Trainee},
                designation:"Fitness Trainer",
                price:"$100/day",
                location:"Chennai"
            },{
                id:2,
                name:"Jenny Kevin",
                img:{Trainee},
                designation:"Paint Teacher",
                price:"$150/day",
                location:"Koramangala"
            },{
                id:3,
                name:"Jaclin",
                img:{Trainee},
                designation:"Cooking Trainer",
                price:"$200/day",
                location:"Chennai"
            },{
                id:4,
                name:"John",
                img:{Trainee},
                designation:"Business Trainer",
                price:"$100/day",
                location:"Mumbai"
            },{
                
                    id:5,
                    name:"Wozniak",
                    img:{Trainee},
                    designation:"Swift Tutor",
                    price:"$120/day",
                    location:"Kolkata"
                
            }]
        }
    }
    render(){
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
            <div className="__nearby-trainers">
            <div className="you_may">
			   Near By <span style={{color:" #0f3eb0", fontSize:"4vw !important"}}> Trainers </span>
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
      
      
      {/* <Row gutter={24}>
      <Col className="gutter-row" span={14} style={{textAlign:"left"}}>
      <Rate  className="ratecolor" allowHalf defaultValue={4} />
      </Col>
      
      </Row> */}
      </div>
      {/* <input className="input_round" type="radio" name="circleClick" id={'radiomob'+i} checked={obj.isChecked} onClick={(e)=>radioChange(e,i)}/> */}
      <label className="lable_radio" for={'radiomob'+i}>

    

      <div className="trainer_img-div" style={{flex:.7,marginTop:'5px',borderRadius:'50px'}} >
             <img  src={detail.img.Trainee} alt="Arrow Text" class="trainer_result_img"/>
      </div>

      <div  style={{fontSize:"22px",display:"flex",flexWrap:"wrap", textAlign:"left"}}>
      <div>
        
      <div className="text_size-1" >{detail.name}-{detail.designation}</div>
    
      </div>

      </div>
      <div className="Linebefore"></div>
      </label>
  

      </div>
      </Card>


     

      </div>
       )}
    

    </Swiper>

            </div>
            </div>
        )
    }
}