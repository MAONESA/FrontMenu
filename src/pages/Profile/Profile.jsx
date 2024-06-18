import { useState } from 'react';
import { EditOutlined, SettingOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Modal, Upload, Button } from 'antd';
import './profile.css';

const { Meta } = Card;

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingBanner, setIsEditingBanner] = useState(false);
  const [description, setDescription] = useState("This is the description");
  const [tempDescription, setTempDescription] = useState(description);

  const [username, setUsername] = useState("Usuario");
  const [tempUsername, setTempUsername] = useState(username);

  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const [bannerImage, setBannerImage] = useState("https://via.placeholder.com/600x200");

  const [tempProfileImage, setTempProfileImage] = useState(profileImage);
  const [tempBannerImage, setTempBannerImage] = useState(bannerImage);

  const handleEdit = () => {
    setTempDescription(description);
    setTempUsername(username);
    setTempProfileImage(profileImage);
    setIsEditing(true);
  };

  const handleSettings = () => {
    setTempBannerImage(bannerImage);
    setIsEditingBanner(true);
  };

  const handleSave = () => {
    setDescription(tempDescription);
    setUsername(tempUsername);
    setProfileImage(tempProfileImage);
    setIsEditing(false);
  };

  const handleSettingsSave = () => {
    setBannerImage(tempBannerImage);
    setIsEditingBanner(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSettingsCancel = () => {
    setIsEditingBanner(false);
  };

  const handleProfileImageChange = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setTempProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBannerImageChange = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setTempBannerImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='profile-container'>
      <Card
        className='profile-card'
        cover={
          <img
            alt="banner"
            src={bannerImage}
          />
        }
        actions={[
          <SettingOutlined key="setting" onClick={handleSettings} />,
          <EditOutlined key="edit" onClick={handleEdit} />,
        ]}
      >
        <Meta
          avatar={<Avatar shape="square" icon={<UserOutlined />} src={profileImage} />}
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
          {tempBannerImage && <img src={tempBannerImage} alt="Imagen de banner" className='upload-preview' />}
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
