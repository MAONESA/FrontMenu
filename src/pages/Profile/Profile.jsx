// import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import './profile.css';

const { Meta } = Card;

const Profile = () => {
  return (
    <div className='profile-container'>
      <Card className='profile-card'
        cover={
          <img
            alt="Imagen de perfil"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Perfil"
          description="This is the description"
        />
      </Card>
    </div>

  );
};

export default Profile;
