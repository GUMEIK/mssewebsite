import React, { Component } from 'react'
import { Descriptions } from 'antd';
import {projectArr} from './projectConfig'
console.log(projectArr)
const DescriptionCom = (props)=>(
<Descriptions title={props.title} layout="vertical">
    <Descriptions.Item label="在线体验">
        <a href={props.address}>{props.address}</a>
    </Descriptions.Item>
    <Descriptions.Item label="技术栈">{props.tec}</Descriptions.Item>
    <Descriptions.Item label="项目地址">
        <a href={props.github}>github地址</a>
    </Descriptions.Item>
    <Descriptions.Item label="作者">谷美，一个文武双全的程序员</Descriptions.Item>
    <Descriptions.Item label="项目简介">{props.description}</Descriptions.Item>
  </Descriptions>
)

 {/* 项目名称  github地址  技术站 项目描述  作者名子 */}
export default class ProjectCom extends Component {
    render() {
        return (
            <>
                {projectArr && projectArr.map(el=>{
                    console.log(el)
                    return (
                        <DescriptionCom
                            key={el.github}
                            title={el.title}
                            tec={el.tec}
                            github={el.github}
                            description={el.description}
                            address={el.address}
                        />
                    )
                })}
            </>
                
        )
    }
}



