import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Button, Layout, Menu, Select } from "antd";
import { useSelector, useDispatch } from 'react-redux'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    StockOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { RootState } from '../Redux/store';
import { toogleLanguage } from '../Redux/lLanguageSlice';
import { EngLangDatas, RusLangDatas } from '../models/languageDatas';

const LayOut = () => {
    const [callapsed, setCollapsed] = useState(false);
    const [disable, setDisable] = useState(false);
    const language = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch();

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
                            key: '1',
                            icon: <UserOutlined />,
                            label: language === 'ENG' ? EngLangDatas.SideBar.UsersBtn : RusLangDatas.SideBar.UsersBtn
                        },
                        {
                            key: '2',
                            icon: <StockOutlined />,
                            label: language === 'ENG' ? EngLangDatas.SideBar.StatsBtn : RusLangDatas.SideBar.StatsBtn,
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
                        onChange={() => dispatch(toogleLanguage())}
                        defaultValue={'ENG'}
                        style={{
                            width: 100,
                            marginRight: 16
                        }}
                        options={[
                            { value: 'ENG', label: <span>ENG</span> },
                            { value: 'RUS', label: <span>RUS</span> }
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