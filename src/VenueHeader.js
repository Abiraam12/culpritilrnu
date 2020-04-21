import React, { Component } from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import VideoPlayer from './components/VideoPlayer';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BannerSmallFilter from './BannerSmallFilter';
const styles = { height: 400, width: "100%" };
const small_banner=require("./icon/Inner Page_Banner-Image.svg");
const header_play=require("./icon/Banner_Play.svg");
const small_v=require("./img/vsmall.png");

class VenueHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      activeBread:this.props.showBreadCrums,
      modal:false
    };
    this.toggle = this.toggle.bind(this);
  }
  onSelect = (active, direction) => {
    // console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    // console.log(`visiable onSelect active=${active}`);
  };
  componentWillReceiveProps=(props)=>{
    this.setState({activeBread:props.showBreadCrums})
    console.log("copp",this.state.activeBread)
  }
      toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
 
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid carouselbuttonmargin" style={{position:'relative',overflow:'hidden',padding:0}}>
      <div className="slider_play" onClick={this.toggle}>
      <img
      src={header_play} />
      <span className="slider_play_span"> How to Add Venue</span>
      <div className="guidevideo">A Guided Video</div>
      </div>
      <div className="venue_v smallnewvenue">
      <div className="BImage" style={{height: '82%',width: '80%'}}>
      <img
      src={small_v} style={{width:'100%',height:'100%'}}/>
      </div>
      </div>
      <BannerSmallFilter />
      <Row >

      <Col span={12} style={{padding:0}}>
      <RBCarousel
        animation={true}
        autoplay={this.state.autoplay}
        slideshowSpeed={20000000}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onSelect={this.onSelect}
        ref={r => (this.slider = r)}
        version={4}
      >
      <div >
      <img
      style={{ width: "100%", height: "100%" }}
      src={small_banner} />

      </div>

      <div >
      <img
      style={{ width: "100%", height: "100%" }}
      src={small_banner} />

      </div>
      <div >
      <img
      style={{ width: "100%", height: "100%" }}
      src={small_banner} />

      </div>
      <div >
      <img
      style={{ width: "100%", height: "100%" }}
      src={small_banner} />

      </div>
      <div >
      <img
      style={{ width: "100%", height: "100%" }}
      src={small_banner} />

      </div>

      </RBCarousel>

      </Col>


      </Row>
      <div className="BheightClass" style={{height:'13vh',backgroundColor:'#24479D',display:'flex',position:'relative'}} >
      <div className="breadcrums" >
      <p class="breadspan" >

      <Link to="/"><a href="javascript:" className={this.state.activeBread==""?'breadactive':''}>Home</a></Link> &nbsp; > &nbsp; 
      {/* <Link to="/addvenue"><a href="javascript:" className={this.state.activeBread=="venue"?'breadactive':''}>Venue</a></Link> &nbsp; >   */}
      <p class="breadmainspan" >  
      <Link to="/listmyvenue"><a href="javascript:" className={this.state.activeBread=="listmyvenue"?'breadactive':''}>List my Venue</a></Link> 
      {/* <Link to="/listmytraining"><a href="javascript:" className={this.state.activeBread=="listmytraining"?'breadactive':''}>List my Training</a></Link>  */}

      <span style={{color:'#FFFFFF'}}>&nbsp; >> &nbsp;</span>
      </p></p>
      </div>
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} size='xl'
      centered={true} className="video_model">
          <ModalHeader toggle={this.toggle}>
          <p className="video-model-margin"><b>How to add your venue in iLRNU</b></p>
          <div className="video-model-font">A Guide Video</div>

          </ModalHeader>
          <ModalBody>
            <VideoPlayer videoUrl={require('./video/guide_video.mp4')}/>
          </ModalBody>
          </Modal>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
 const Row = props => <div className="row">{props.children}</div>;
 const Col = props => (
   <div className={`col-${props.span}`} style={props.style}>
   {props.children}
   </div>
   );
 // const Button = props => {
 //   const { style, bsStyle, onClick } = props;
 //   const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
 //   return (
 //     <button style={style} className={className} onClick={onClick}>
 //     {props.children}
 //     </button>
 //     );
 // };

export default VenueHeader;

