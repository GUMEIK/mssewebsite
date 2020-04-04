import React, { Component } from 'react'
import {GithubOutlined} from "@ant-design/icons"
import './index.css'
export default class TopMenuRight extends Component {
    render() {
        return (
            <div className="TopMenuRightWrapper" >
                {/* 跳转到github */}
                <a href="https://github.com/GUMEIK"
                style={{
                    textDecoration:"none",
                    color:"#fff"
                }}
                ><GithubOutlined/></a>
                <a href="https://blog.csdn.net/qq_42581023">CSDN</a>
            </div>
        )
    }
}
