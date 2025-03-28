import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Button, Layout, Menu, Select } from "antd";
import { useNavigate } from "react-router";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    StockOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Languages } from '../enums/Languages';

const LayOut = () => {
    const { t } = useTranslation();
    const [callapsed, setCollapsed] = useState(false);
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    const changeLang = (lang: string) => {
        i18next.changeLanguage(lang);
    }

    useEffect(() => window.innerWidth < 768 ? setCollapsed(true) : setCollapsed(false) ,[])

    window.addEventListener('resize', () => window.innerWidth < 768 ? setDisable(true) : setDisable(false));

  return (
    <>
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={callapsed || window.innerWidth < 768}
                style={{
                    height: '100vh',
                    position: 'sticky',
                    top: 0
                    }}>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            onClick: () => navigate('/'),
                            key: '1',
                            icon: <UserOutlined />,
                            label: t("SideBar.UsersBtn")
                        },
                        {
                            onClick: () => navigate('contactUs'),
                            key: '2',
                            icon: <StockOutlined />,
                            label: t("SideBar.StatsBtn"),
                        }
                    ]}>
                    
                </Menu>
            </Sider>
            <Layout>
                <Header style={{
                            padding: 0,
                            background: 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                    <Button
                        disabled={disable ? true : false}
                        type='text'
                        icon={callapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!callapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}> 
                    </Button>
                    <Select
                        onChange={(value) => {changeLang(value)}}
                        defaultValue={Languages.ENGLISH}
                        style={{
                            width: 100,
                            marginRight: 16
                        }}
                        options={[
                            { value: 'en', label: <span>{Languages.ENGLISH}</span> },
                            { value: 'ru', label: <span>{Languages.RUSSIAN}</span> }
                        ]}/>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: 'white',
                        borderRadius: 5
                    }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </>
  )
}

export default LayOut