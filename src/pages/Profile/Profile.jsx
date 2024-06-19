import { useState, useEffect } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, message } from 'antd';
import axios from 'axios';

const { Meta } = Card;

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Replace with the actual user ID or retrieve it from authentication context
    const userId = 1;
    axios.get(`http://localhost:8080/user/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
        message.error('Failed to load user data');
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
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
        title={user.nickname}
        description={user.email}
      />
    </Card>
  );
};

export default Profile;
