import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CarouselImages from '../../pages/carouselImages/carouselImages';

const CardViewComp = (props) => {
  return (
    <div  style={{width:'100%'}} >
      <Card>
      <div className="swiperPaginationcontrols photosmodalcarousel">
      <CarouselImages photos={props.images}/>
      </div>
       {/*} <CardImg top  width="100%" src={props.images.length>0?props.images[0].venue_image_path:''} alt="Card image cap" />*/}
        <CardBody>
        {props.status==1&&<p className="circleStatus green"><span></span> Live</p>}
        {props.status==0&&<p className="circleStatus orange"><span></span> Pending</p>}
        {props.status==2&&<p className="circleStatus red"><span></span> Rejected</p>}
        {props.status==3&&<p className="circleStatus grey"><span></span> In Activated</p>}
       
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText className="addellipsisClamp">{props.description}</CardText>
          <Button style={{backgroundColor:'#ea5b02',borderColor:'transparent'}} onClick={()=>props.goEditPage&&props.goEditPage()}>Edit</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardViewComp;