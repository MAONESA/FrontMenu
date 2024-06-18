// import React from 'react';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import './profile.css';
const Profile = () => (
  <div className='profile-container '>
    <Card className='profile-card'
      cover={
        <img
          alt="example"
          //Esto es el banner
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" // Cambiar con la base de datos y ver como cambiarla sin de que error
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar shape="square" icon={<UserOutlined />} />} // Perfil
        title="Usuario" // Cambiar con la base de datos 
        description="This is the description" // Poder modificar con editor y juntar con base de datos
      />
    </Card>
  </div>
);
export default Profile;
