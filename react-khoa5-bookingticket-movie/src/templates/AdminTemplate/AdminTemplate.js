import { Fragment, useEffect, useState } from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import './AdminTemplate.css'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { USER_LOGIN } from "../../util/config";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export const AdminTemplate = (props) => {
    const [collapsed, setState] = useState(false)
    const onCollapse = collapsed => {

        setState({ collapsed });
    };
    const { Component, ...restProps } = props;
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    if (!localStorage.getItem(USER_LOGIN)) {
        alert("Bạn chưa đăng nhập!!!")
        return <Redirect to="/" />
    }
    if (userLogin.maLoaiNguoiDung !== "QuanTri") {
        alert("Bạn không có quyền vào trang này!!!")
        return <Redirect to='/' />
    }




    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        
                        <SubMenu  icon={<UserOutlined />} key="1" title="Admin User">
                            <Menu.Item key="2" >
                                <NavLink to='/admin/users' >Users</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" >
                                <NavLink to='/admin/addnewuser'>New User</NavLink>
                            </Menu.Item>
                            {/* <Menu.Item key="5" >
                            <NavLink to='/admin/editfilm'>Edit Films</NavLink>
                            </Menu.Item> */}

                        </SubMenu>
                        <SubMenu icon={<FileOutlined />} key="4" title="Admin Films">
                            <Menu.Item key="5" >
                                <NavLink to='/admin/films' >Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="6" >
                                <NavLink to='/admin/addnewfilm'>New Films</NavLink>
                            </Menu.Item>
                            {/* <Menu.Item key="5" >
                            <NavLink to='/admin/editfilm'>Edit Films</NavLink>
                            </Menu.Item> */}

                        </SubMenu>
                      


                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}