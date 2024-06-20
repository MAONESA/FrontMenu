import { useState, useEffect } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';
import { Avatar, Card, message } from 'antd';
import iconoPerfil from './img/1.png'
import axios from 'axios';

const { Meta } = Card;

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    axios.get(`http://localhost:8080/user/`)
      .then(response => {
        // En este punto, response.data debería ser un array de usuarios si la respuesta es correcta
        // Para mostrar solo el primer usuario, asignamos response.data[0] a setUser
        setUser(response.data[6]); // El usuario seleccionado !!!!!!
      })
      .catch(error => {
        console.error('Error conectar usuario:', error);
        message.error('Fallo de carga');
      });
  };

  if (!user) {
    return <div><SyncOutlined spin /></div>;
  }

  // Renderizamos el usuario único
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
        avatar={<Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={iconoPerfil}
        />}
        title={user.nickname} // Asegúrate de usar user.nickname si user es un objeto de usuario
        description={user.email} // Asegúrate de usar user.email si user es un objeto de usuario
      />
    </Card>
  );
};

export default Profile;
