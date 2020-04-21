import React, { Component } from 'react';
import { Row, Col,Card,Icon,Upload, Button,Modal  } from 'antd';
import { Collapse } from 'reactstrap';
import Apilink from './apilink';
import UploadInfo from './icon/upload-image/uploadInfo';
const photo_next=require("./icon/photo_next.svg");
const PlusTransparent=require("./icon/plustransparent.svg");
const photoinfo=require("./img/photoinfo.png");
const Addplus=require("./img/plus.png");
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
var countnew=0;
const props = {
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log("imageupload",file, fileList);
    }
  },
}
class ImageGallery  extends Component {
	constructor(props) {
    super(props);
    console.log('props',props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      listtype:'list1',
         collapse: true,
         previewVisible: false,
    previewImage: '',
    fileList: [],
    onclickstate:true,
    img:'',
    uploadFormData:'',
    type:'photo',
    openphotoinfo:false
         
    };
  }

  componentWillReceiveProps=(props)=>{
    console.log("props",props);
    if(props.filelistnew){
      this.setState({fileList:props.filelistnew});
    }
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    console.log(file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList,file}) =>{
    // window.stop();  
    console.log(fileList);
    this.setState({ fileList })
    var uploadFormData=[];
    for(var i in fileList){
      uploadFormData.push(fileList[i].originFileObj);
    }
    // console.log('uploadFormData',uploadFormData)
    this.setState({uploadFormData:uploadFormData});
    var fileobj=uploadFormData;
     this.props.receiveimgdata(fileobj,this.state.fileList);
    // console.log("file",file.name);
//   
   //  alert('hiii');
  }
  onchangeType=(data)=>{
    // alert(data);
    this.setState({type:data})
    this.props.updateheight();
  }
  toggle() {
    // this.setState(state=>({collapse:false}));  
    this.setState(state => ({ collapse: !state.collapse }));
  }
   changeonclick=(data)=>{
     // window.stop();

     document.querySelector(".ant-upload input").click();
//      this.setState({onclickstate:data})
//      var self=this;
//      setTimeout(()=>{
// self.setState({onclickstate:!data});
//      },1000)
   }
   handleClick =(file)=>{
    // var fileobj=this.state.fileList;
    // console.log("fileobj",fileobj);
    // var obj={"venue_image":fileobj};
    // var formdata=new formData({});
var fileobj=this.state.uploadFormData;
     this.props.receiveimgdata(fileobj,this.state.fileList);
//   fetch(Apilink.apiurl+'insert_venue/', {
//      method: 'POST',
//   body: fileobj,
// }).then((response)=>response.json())
//    .then((responseJson)=>{
// // Actions.verify({loginobj});

//    }) 
    
this.props.nexttab('list8');
   }
   beforeUpload=(data)=>{
     // console.log(data);
     return true;
   }
  render() {

    var onclickstate=false;
    const { previewVisible, previewImage, fileList,open,uploadFormData } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
  	var Background=require("./img/tablee.jpg");
  	var Background1=require("./img/download.jpg");
  	var Background2=require("./img/interactive-learning-center.jpg");
  	var Background3=require("./img/learning.jpg");
  	var Background4=require("./img/social-area-shrink2.jpg");
    // console.log(uploadFormData.length);
    // const lengthnew=c;
    return (
    	<div>
    	<div className="webmodules" style={{height:'8vh',width:'100%'}}>
    	<p class="borderheader_fac webmodules" style={{display:'flex',height:'100%'}}>
    	<Icon type="right" class='webmodules'  onClick={this.toggle}
          aria-controls="example-collapse-text"
          aria-expanded={open} style={{'float':'left'}} /> &nbsp;&nbsp;&nbsp;<p  onClick={()=>this.onchangeType('photo')} className={`arrowbefore ${this.state.type=='photo'?'active':''}`}>Upload Photos</p> <p onClick={()=>this.onchangeType('gallery')} style={{'margin-left': '17px'}} className={`arrowbefore ${this.state.type=='gallery'?'active':''}`}><UploadInfo /></p> </p></div>
          <div style={{width:'100%',height:'3px'}} className='arrow_box leftchange webmodules'></div>

          {this.state.type=='photo'&&
          <Collapse isOpen={this.state.collapse}>
      
    {/* upload button */}
    <div className="gutter-example" style={{padding:20}}>
      <Modal header={null} footer={null} visible={this.state.openphotoinfo}  onCancel={()=>this.setState({openphotoinfo:false})} className="flexend photoinfo_modal">
      <div class="photoinfo_header clearfix">
      <img src={PlusTransparent}/>
      <h5 style={{color:'orange'}}>Photos Information</h5>
      </div>
      <div className="contentinfo">
       <p className="subheadertext" >How photos should look like ? </p>
          <Row gutter={24} className="maingallery">
          <Col span={18} style={{minHeight:'100%'}}><div style={{background: "url(" + Background + ")no-repeat center",width:'100%',height:'100%',}}></div></Col>
          <Col span={6} style={{minHeight:'100%'}} className="mingallerycol">
          <div style={{background: "url(" + Background1 + ")no-repeat center",width: '88%',
    height: '24%',borderRadius:5}}></div>
          <div style={{background: "url(" + Background2 + ")no-repeat center",width: '88%',
     height: '24%',borderRadius:5}}></div>
          <div style={{background: "url(" + Background3 + ")no-repeat center",width: '88%',
     height: '24%',borderRadius:5}}></div>
          <div style={{background: "url(" + Background4 + ")no-repeat center",width: '88%',
     height: '24%',borderRadius:5}}></div>
         
          </Col>
          </Row>
         <p className="subheadertext" style={{marginTop:11}}>How Suitable photography details improves these views and booking? </p>
           <p style={{'line-height':'20px','text-align': 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           <div class="photo-button">
    <button class="btn btn_next btn-lg" style={{width:'auto',height:'50px'}}>
    REQUEST FOR PHOTOGRAPHY SERVICE
    </button>
    </div>

      </div>
      </Modal>
         
      <div className="clearfix flexmob">
        <Upload
        {...props}
          //action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          openFileDialogOnClick={window.innerWidth>767?true:false}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          multiple
        >
          {fileList.length >= 15 ? null : uploadButton}
           <div onClick={()=>this.setState({openphotoinfo:true})} className="mobmodules mobilemodules imggallery"  ><img src={photoinfo}/></div>
     <p className='mobilemodules mobmodules'>Upload Photos</p>
          <div className="mobmodules mobilemodules imggallery extrawidth" onClick={()=>this.changeonclick(true)}><img src={Addplus}/></div>
           
        </Upload>
        </div>
        <Modal className="imageModal" visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
 {/*<div className="gutter-example" style={{padding:20}}>
    <Row gutter={18}>
      <Col className="gutter-row" span={4}>
      
       <img src={require('./img/classroom.jpg')} style={{width:'220px',height:'180px',borderRadius:5}} />
      
      
      </Col>
      <Col className="gutter-row" span={4}>
        
       <img src={require('./img/classroom.jpg')} style={{width:'220px',height:'180px',borderRadius:5}} />
      
      </Col>
      <Col className="gutter-row" span={4}>
        
       <img src={require('./img/classroom.jpg')} style={{width:'220px',height:'180px',borderRadius:5}} />
      
      </Col>
      <Col className="gutter-row" span={4}>
       
       <img src={require('./img/classroom.jpg')} style={{width:'220px',height:'180px',borderRadius:5}} />
      
      </Col>
      <Col className="gutter-row" span={4}>
       
       <img src={require('./img/classroom.jpg')} style={{width:'220px',height:'180px',borderRadius:5}} />
      
      </Col>
    </Row>
    <div class="bottomsize"></div>
    
  </div> */}
  </Collapse>
}
  {this.state.type=='gallery'&&
    <div className="gutter-example" >
    <Row gutter={16}>
      <Col className="gutter-row width100" span={12}>
      <div style={{height:'8vh',width:'100%'}}>
    	<p class="borderheader_fac">
    	<Icon type="right"  onClick={this.toggle}
          aria-controls="example-collapse-text"
          aria-expanded={false} style={{'float':'left',padding:5}} /> <p style={{'margin-left':'35px',fontSize:'23px'}}>How photos should look like ? </p> </p></div>
          <Row gutter={24} style={{height:425}}>
          <Col span={18} style={{height:'100%'}}><div style={{background: "url(" + Background + ")no-repeat center",width:'100%',height:'100%','margin-left': '5%'}}></div></Col>
          <Col span={6} style={{height:'100%','padding-left':'4%'}}>
          <div style={{background: "url(" + Background1 + ")no-repeat center",width: '88%',
    height: '24%',borderRadius:5,'margin-bottom':'10px'}}></div>
          <div style={{background: "url(" + Background2 + ")no-repeat center",width: '88%',
     height: '24%',borderRadius:5,'margin-bottom':'10px'}}></div>
          <div style={{background: "url(" + Background3 + ")no-repeat center",width: '88%',
     height: '24%',borderRadius:5,'margin-bottom':'10px'}}></div>
          <div style={{background: "url(" + Background4 + ")no-repeat center",width: '88%',
     height: '24%',borderRadius:5,'margin-bottom':'10px'}}></div>
         
          </Col>
          </Row>

      </Col>
      <Col className="gutter-row width100" span={12}>
<div style={{width:'100%'}}>
    	<p class="borderheader_fac">
    	<Icon type="right"   style={{'float':'left',padding:5}} /> <p style={{'margin-left':'35px',fontSize:'23px'}}>How Suitable photography details improves these views and booking? </p> </p></div>
        
        <p style={{'padding-left':'8%','padding-right':'5%','line-height':'20px','text-align': 'justify','color':'#24479D'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>
       <div class="photo-button">
    <button class="btn btn_next btn-lg" style={{width:'auto',height:'50px'}}>
    REQUEST FOR PHOTOGRAPHY SERVICE
    </button>
    </div>
      </Col>
      
    </Row>
  </div>
}
  <p class="borderbottom_photo"></p>
  <div class="webmodules button_change">
    <button class="btn btn_next btn-lg" onClick={this.handleClick}>
    NEXT
    </button>
    </div>
  </div>
    )}
}
export default ImageGallery;
