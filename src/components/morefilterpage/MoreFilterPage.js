import React from 'react';
import MoreFilterComp from '../../components/morefiltercomp/MoreFilterComp'
import Popupbox from '../../components/popupbox/popupbox';
import LookingFor from '../../components/LookingFor/LookingFor';
import NearByGround_res from '../../components/nearByGround_responsive/nearByGround_res';
import SoccerGround_res from '../../components/soccer_ground_responsive/soccerGround_res';
import SoccerGround from '../../components/soccer_ground/soccerGround';
import TrainerResult from '../../components/TrainerResult/TrainerResult';
import NearByTrainers from '../../components/nearByTrainers/NearByTrainers';


export default class MoreFilterPage extends React.Component{
    render(){
        return(
            <div>
                {window.innerWidth < 768 &&
                <div>
                       {/* <MoreFilterComp /> */}
                       <TrainerResult />
                       <LookingFor />
                       <NearByTrainers />
 
                  </div>      
                 }
            </div>
        )
    }
}