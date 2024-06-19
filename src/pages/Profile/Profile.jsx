import { useState } from 'react';
import { EditOutlined, SettingOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Modal, Upload, Button } from 'antd';
import './profile.css';

// Esto es para poder usar el componente Meta del Card
const { Meta } = Card;

const Profile = () => {
  // Maneja el estado de si estamos editando el perfil o no
  const [isEditing, setIsEditing] = useState(false);
  // Maneja el estado de si estamos editando el banner o no
  const [isEditingBanner, setIsEditingBanner] = useState(false);
  // El estado para la descripción del perfil
  const [description, setDescription] = useState("This is the description");
  // Estado temporal para la descripción mientras la editamos
  const [tempDescription, setTempDescription] = useState(description);

  // El estado para el nombre de usuario
  const [username, setUsername] = useState("Usuario");
  // Estado temporal para el nombre de usuario mientras lo editamos
  const [tempUsername, setTempUsername] = useState(username);

  // El estado para la imagen de perfil
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  // El estado para la imagen del banner
  const [bannerImage, setBannerImage] = useState("https://via.placeholder.com/600x200");

  // Estados temporales para las imágenes mientras las editamos
  const [tempProfileImage, setTempProfileImage] = useState(profileImage);
  const [tempBannerImage, setTempBannerImage] = useState(bannerImage);

  // Función para manejar la edición del perfil
  const handleEdit = () => {
    // Guarda los valores actuales en los estados temporales
    setTempDescription(description);
    setTempUsername(username);
    setTempProfileImage(profileImage);
    setIsEditing(true); // Abre el modal de edición de perfil
  };

  // Función para manejar la configuración del banner
  const handleSettings = () => {
    setTempBannerImage(bannerImage);
    setIsEditingBanner(true); // Abre el modal de edición del banner
  };

  // Función para guardar los cambios de edición del perfil
  const handleSave = () => {
    setDescription(tempDescription);
    setUsername(tempUsername);
    setProfileImage(tempProfileImage);
    setIsEditing(false); // Cierra el modal de edición de perfil
  };

  // Función para guardar los cambios de configuración del banner
  const handleSettingsSave = () => {
    setBannerImage(tempBannerImage);
    setIsEditingBanner(false); // Cierra el modal de edición del banner
  };

  // Función para cancelar la edición del perfil
  const handleCancel = () => {
    setIsEditing(false); // Cierra el modal de edición de perfil
  };

  // Función para cancelar la configuración del banner
  const handleSettingsCancel = () => {
    setIsEditingBanner(false); // Cierra el modal de edición del banner
  };

  // Función para cambiar la imagen de perfil
  const handleProfileImageChange = ({ file }) => {
    const reader = new FileReader();
    // Cuando el archivo se carga, actualiza la imagen temporal
    reader.onload = () => {
      setTempProfileImage(reader.result);
    };
    reader.readAsDataURL(file); // Lee el archivo como una URL de datos
  };

  // Función para cambiar la imagen del banner
  const handleBannerImageChange = ({ file }) => {
    const reader = new FileReader();
    // Cuando el archivo se carga, actualiza la imagen temporal
    reader.onload = () => {
      setTempBannerImage(reader.result);
    };
    reader.readAsDataURL(file); // Lee el archivo como una URL de datos
  };

  return (
    <div className='profile-container'>
      <Card
        className='profile-card'
        // Imagen de la portada del perfil
        cover={
          <img
            alt="banner"
            src={bannerImage}
          />
        }
        // Acciones del perfil
        actions={[
          <SettingOutlined key="setting" onClick={handleSettings} />,
          <EditOutlined key="edit" onClick={handleEdit} />,
        ]}
      >
        <Meta
          // Avatar del perfil
          avatar={<Avatar shape="square" icon={<UserOutlined />} src={profileImage} />}
          // Nombre de usuario y descripción
          title={username}
          description={description}
        />
      </Card>

      <Modal
        title="Editar Perfil"
        visible={isEditing}
        onOk={handleSave}
        onCancel={handleCancel}
      >
        <div className='modal-content'>
          <Input
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            placeholder="Nombre de usuario"
          />
          <Input.TextArea
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            rows={4}
            placeholder="Descripción"
          />

          {/* Muestra una vista previa de la imagen de perfil */}
          {tempProfileImage && <img src={tempProfileImage} alt="Imagen de perfil" className='upload-preview' />}
          <Upload
            beforeUpload={() => false}
            onChange={handleProfileImageChange}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Cambiar imagen de perfil</Button>
          </Upload>
        </div>
      </Modal>

      <Modal
        title="Editar Imagen de Banner"
        visible={isEditingBanner}
        onOk={handleSettingsSave}
        onCancel={handleSettingsCancel}
      >
        <div className='modal-content'>
          <Upload
            beforeUpload={() => false}
            onChange={handleBannerImageChange}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Cambiar imagen de banner</Button>
          </Upload>
          {/* Muestra una vista previa de la imagen del banner */}
          {tempBannerImage && <img src={tempBannerImage} alt="Imagen de banner" className='upload-preview' />}
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
