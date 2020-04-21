import React, { Component } from 'react';
import { Row, Col,Card,Icon,Table,Tag,Divider } from 'antd';

class Review extends React.Component{
	render(){
		return(
<table class="table">
    
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
      </tr>
    </tbody>
  </table>
			)
	}
}

export default Review;