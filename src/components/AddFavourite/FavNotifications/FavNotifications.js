import React from 'react';
import { notification, Icon } from 'antd';

 const FavNotifications = (props) => (

      notification.open({
      message: props.msg,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    })
  

  );

  export default FavNotifications;