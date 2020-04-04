import React, { Component } from 'react'
import ModalCom from "../ModalCom"
import { Descriptions } from 'antd';
const DescriptionCom = (props)=>(
    <Descriptions title={props.title} layout="vertical">
    <Descriptions.Item label="在线体验">
        <a>地址</a>
    </Descriptions.Item>
    <Descriptions.Item label="技术栈">react,redux,node</Descriptions.Item>
    <Descriptions.Item label="项目地址" span={2}>
      <a>github地址</a>
    </Descriptions.Item>
    <Descriptions.Item label="作者">谷美，一个文武双全的程序员</Descriptions.Item>
    <Descriptions.Item label="项目简介">见网顶部发几阿卡激发卡里的将咖啡机大水库了几分开了连接阿达开了房间阿达开了房间库份开设fkjakdfjkldasjflkajsdfklj的将分开了时间啊但法律科技啊打开了泛简单快乐发几库右侧</Descriptions.Item>

  </Descriptions>
)


export default class ProjectCom extends Component {
    render() {
        return (
            <ModalCom>
                {/* 项目名称  github地址  技术站 项目描述  作者名子 */}
                <DescriptionCom
                title="项目测试"
                />
            </ModalCom>
        )
    }
}



