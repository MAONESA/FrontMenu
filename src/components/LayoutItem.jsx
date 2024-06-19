
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, PlusOutlined, HomeOutlined } from '@ant-design/icons';

import './styles/style.css'

const { Header, Content, Sider, Footer } = Layout;


const LayoutItem = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <Menu
                    theme="orange"
                    mode="horizontal"
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
                        <Link to="listaeventos" title='eventos'><HomeOutlined /></Link>

                    </li>
                    <li>
                        <Link to="/profile"><UserOutlined /></Link>
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
                            minHeight: 620,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>

                </Layout>

            </Layout>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default LayoutItem;
