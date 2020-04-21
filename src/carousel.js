import React, { Component } from 'react';
import RBCarousel from "react-bootstrap-carousel";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SlideFilter from './SlideFilter';
import VideoPlayer from './components/VideoPlayer';
const styles = { height: 400, width: "100%" };
const header_img=require("./icon/Home-Banner.svg");
const header_play=require("./icon/Banner_Play.svg");
const big_v=require("./img/vbig.png");

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
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

    toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
 
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid carouselbuttonmargin" style={{position:'relative',overflow:'hidden'}}>
       <div className="slider_play"  onClick={this.toggle}>
                  <img
                  src={header_play} />
                 <span className="slider_play_span"> How to Add Venue</span>
                 <div className="guidevideo">A Guided Video</div>
                </div>
                <div className="venue_v">
           
                <div style={{height: '82%',width: '80%'}}>
                <img
                  src={big_v} style={{width:'100%',height:'100%'}}/>
                  </div>
                </div>
<SlideFilter />
        <Row>
          
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
                  src={header_img} />
                
              </div>
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div>
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div>
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div>
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div>
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div> 
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div> 
              <div >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={header_img} />
               
              </div>
              
            
             
                </RBCarousel>
                
  

          </Col>
          
         
        </Row>

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
//       {props.children}
//     </button>
//   );
// };

export default Carousel;

