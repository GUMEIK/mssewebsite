import React, { Component } from 'react'
import { Descriptions } from 'antd';
import {projectArr} from './projectConfig'
/**
 * 
 * @param {
 * title     项目名称
 * address  项目地址
 * tec     技术栈
 * time  完成时间
 * github   github地址
 * description  项目简介
 * } props 
 */
const DescriptionCom = (props)=>(
<Descriptions title={props.title} layout="vertical">
    <Descriptions.Item label="在线体验">
        <a href={props.address}>{props.address}</a>
    </Descriptions.Item>
    <Descriptions.Item label="技术栈">{props.tec}</Descriptions.Item>
    <Descriptions.Item label="项目完成时间">{props.time}</Descriptions.Item>
    <Descriptions.Item label="项目地址">
        <a href={props.github}>github地址</a>
    </Descriptions.Item>
    <Descriptions.Item label="作者">谷美，一个文武双全的程序员</Descriptions.Item>
    <Descriptions.Item label="项目简介">{props.description}</Descriptions.Item>
  </Descriptions>
)
export default class ProjectCom extends Component {
    render() {
        return (
            <>
                {projectArr && projectArr.map(el=>{
                    return (
                        <DescriptionCom
                            key={el.github}
                            title={el.title}
                            tec={el.tec}
                            github={el.github}
                            description={el.description}
                            address={el.address}
                            time={el.time}
                        />
                    )
                })}
            </>  
        )
    }
}



