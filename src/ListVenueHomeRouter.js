import React, { Component } from 'react';

import LearnVideos from './LearnVideos';
import SpecialOffers from './SpecialOffers';
import Defaultheader from './Defaultheader';
import VenueHeader from './VenueHeader';
import MostDemandLocation from './MostDemandLocation';
import FooterCopyright from './FooterCopyright';
import Carousel from './carousel';

class ListVenueHomeRouter extends Component {
  constructor(props){
    super(props);
    this.state={};
    }
    componentDidMount=()=>{
      this.props.someProp('home');
    }

    render() {
      console.log("router props",this.props)

      return (

        <div>
                       <Defaultheader switchRoute={(data)=>this.setState({userType:1})} />
                       <Carousel />
        <SpecialOffers />
        <MostDemandLocation />
        <LearnVideos/>
         <div className="webmodules">
      <FooterCopyright />
    </div>
        </div>

        );
    }
  }

  export default ListVenueHomeRouter;
