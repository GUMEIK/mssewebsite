import React from 'react'
import { Menu } from 'antd';
import "antd/dist/antd.css"
import {
  MailOutlined,
  AppstoreOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import {projectShowAction,introductionShowAction} from '../../store/action/modalControl'
import {store} from '../../store/store'
const { SubMenu } = Menu;

export default class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick}
       selectedKeys={[this.state.current]}
        mode="horizontal"
        // 根节点样式
        style={{height:"100%",lineHeight:"60px",backgroundColor:"transparent"}}
        >
        <Menu.Item key="mail"
        onClick={()=>{
          store.dispatch(introductionShowAction)
        }}
        >
          <MailOutlined />
          关于我
        </Menu.Item>
        <Menu.Item key="app"
        onClick={()=>{
          store.dispatch(projectShowAction)
        }}
        >
          <AppstoreOutlined />
          项目介绍
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <WechatOutlined />
              联系我
            </span>
          }
        >
          {/* <Menu.ItemGroup title="Item 1"> */}
            <Menu.Item key="setting:1"><WechatOutlined/>：xzl839740232</Menu.Item>
            <Menu.Item key="setting:2"><MailOutlined/>：xzlkong@gmail.com</Menu.Item>
          {/* </Menu.ItemGroup> */}
          {/* <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup> */}
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="http://www.msse.vip/gumeik/2019/videoEdu/" rel="noopener noreferrer">
            学习视频
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
