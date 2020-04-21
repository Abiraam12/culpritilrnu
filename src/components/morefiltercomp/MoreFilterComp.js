import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Checkbox } from 'antd';
import Subheader from '../../components/subheader/subheader'
import Popupbox from '../../components/popupbox/popupbox';
import TrainerDatePicker from '../../components/trainerSearch/TrainerDatePicker'
import Nextarrow from '../../components/nextarrow/nextarrow';
import Searchagain from '../../components/searchagain/Searchagain';



export default class MoreFilterComp extends React.Component{

    state={
        collapseState:false,
        category:{value:'id',name:'name',dropdown:[{id:1,name:'Software Trainer'},{id:2,name:'Soft Skill Trainer'},{id:3,name:'Software Sr Trainer'},{id:4,name:"Softskill SME"}]},
        budget:{value:'id',name:'name',dropdown:[{id:1,name:'$100-150/Day'},{id:2,name:'100-120/Day'},{id:3,name:'100-175/Day'},{id:4,name:"150-200/Day"}]},
        domain:{value:'id',name:'name',dropdown:[{id:1,name:'BFSI Trainer'},{id:2,name:'Software Sr Trainer'},{id:3,name:'Math Tutor'},{id:4,name:"Guitar Teacher"}]},
        credentials:{value:'id',name:'name',dropdown:[{id:1,name:'credentials(1)'},{id:2,name:'credentials(2)'},{id:3,name:'credentials(3)'},{id:4,name:"credentials(4)"}]},
        preferences:{value:'id',name:'name',dropdown:[{id:1,name:'preferences(1)'},{id:2,name:'preferences(2)'},{id:3,name:'preferences(3)'},{id:4,name:"preferences(4)"}]},
    }


    receivedodrop=(data,key)=>{
    
        this.setState({searchdata:null});
        this.setState({searchedVenue:null});
        console.log("dovalue",data);
        this.setState({[key]:data});
    // alert(data);
            if(key=='dovalue'){
                this.setState({whatvalue:null,wherevalue:null,TOS:1})
                // this.loadwhat(data.venue_act_id); 
                this.setState({ needarray:data.name})
            }else if(key=='whatvalue'){
                this.setState({wherevalue:null,TOS:2})
                this.loadwhere(data.venue_purpose_id,this.state.dovalue.venue_act_id);
            }else if(key=='wherevalue'){
                this.setState({TOS:3})
            }
      }


    toggle = () => {
        this.setState({
            collapseState:!this.state.collapseState
        })

    }
    render(){
        return(
           
                 <div>
                      <div className="trainer-title_filter">
                <div className="trainer-title__text_filter">Search your Trainer</div>
                <div className="more_filter" onClick={this.toggle}>More Filter <FaAngleDown className="dropdwn_icons_filter" /></div>

                </div>  
                  {this.state.collapseState === true ?
                    <div className="filter_expand">
                      <div class="filter_contents1">
                        <Popupbox  buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'category'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.category} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
                      </div>
                      <div class="filter_contents2">
                        <Popupbox buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'Budget'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.budget} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
                        <Popupbox buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'Domain'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.domain} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
                        <Popupbox buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'Credentials'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.credentials} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
                        <Popupbox buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'Preference'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.preferences} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
                      </div>
                      <div className="filter_divider_parent">
                      <div className="filter_divider_child">
                      </div>
                      </div>
                      
                      <div className="filter_checkboxes">
                           <Checkbox>{`Only Already Booked`}</Checkbox>
                            <Checkbox>{`Top 20`} </Checkbox>
                           <Checkbox>{`Highly rated`} </Checkbox>
                           <Checkbox>{`Activity-based`}</Checkbox>
                       </div>

                       <Subheader bgcolor={"#103eb0!"}>
      <div className="home_droddownflex">
    <span className="heading_search">I need</span>
    <div className="home_dropdownflexItem">
      <Popupbox buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'need'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.needarray} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
    </div>
      <span className="heading_search">in</span>
    <div className="home_dropdownflexItem">
        <Popupbox buttonText={this.state.whatvalue?this.state.whatvalue.venue_purpose_name:'Where'}  sendPopupData={(data)=>this.receivedodrop(data,'whatvalue')} dropdown={this.state.wherearray} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
    </div>
    <span className="heading_search">on</span>
    <div>
        {/* <Popupbox buttonText={this.state.wherevalue?this.state.wherevalue.venue_cat_name:'When'} width={200}  buttonColor={'#fff'} sendPopupData={(data)=>this.receivedodrop(data,'wherevalue')} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'}  /> */}
     <div className="__datepicker">
              <TrainerDatePicker  />
    </div>
    
        
 
        
       
    </div>

    <Nextarrow nextSearchFunc={this.arrowClick}/>
</div>

</Subheader>

                    </div>


               
     
                    :
                    <Searchagain />

                  }
                 </div>

           
        )
    }
}