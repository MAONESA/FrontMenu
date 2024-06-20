import { useState, useEffect } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';
import { Avatar, Card, message } from 'antd';
import iconoPerfil from './img/1.png';
import { getUser } from '../../app/services/User';

const { Meta } = Card;

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    getUser()
      .then(response => {
        setUser(response.data[1]); // El usuario seleccionado
      })
      .catch(error => {
        // console.error('Error conectar usuario:', error);
        message.error('Fallo de carga', error);
      });
  };

  if (!user) {
    return <div><SyncOutlined spin /></div>;
  }

  return (
    <Card
      key={user.id} // Asegúrate de tener una clave única para el usuario
      style={{
        width: 300,
        marginBottom: 16,
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
        avatar={
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={iconoPerfil} // Usa src para establecer la imagen
          />
        }
        title={user.nickname} // Asegúrate de usar user.nickname si user es un objeto de usuario
        description={user.email} // Asegúrate de usar user.email si user es un objeto de usuario
      />
    </Card>
  );
};

export default Profile;
