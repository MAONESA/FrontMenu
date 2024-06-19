
import { Link, Outlet } from 'react-router-dom';
import { Avatar } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';

import './styles/style.css'

const { Header, Content, Sider } = Layout;


const LayoutItem = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                <ul className="nav-links">
                    <li>
                        <Link to="nuevoevento" title='añadir'><PlusOutlined /></Link>
                    </li>
                    <li>
                        <Link to="listaeventos" title='eventos'><PlusOutlined /></Link>

                    </li>
                    <li>
                        <Link to="/profile"><Avatar shape="square" title="Profile" icon={<UserOutlined />} /></Link>
                    </li>

                </ul>
            </Header>
            <Layout>
                <Sider
                    width={0}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default LayoutItem;
