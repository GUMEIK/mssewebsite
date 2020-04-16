import React, { Component } from 'react'
import "./index.css"
import TopMenuLeft from '../../components/TopMenuLeft'
import TopMenuRight from '../../components/topMenuRight'
// import ProjectCom from '../../components/Project'
import IntroductionCom from '../../components/Project'
import BackTopCom from '../../components/BackTopCom'
import ImageBeiAn from '../../static/image/备案图标.png'

export default class MainCom extends Component {
    render() {
        return (
            <div className="MainWrapper">
                <div className="position"></div>
                <header><TopMenuLeft/><TopMenuRight/></header>
                <div className="content">
                    Welcome to gumeik's world ! 
                    <br/>
                    欢迎来到谷美的世界！
                </div>
                <section>
                    {/* <IntroductionCom/> */}
                </section>
                <hr></hr>
                <footer>
                   
                </footer>
                <BackTopCom/>
                <div style={{
                        // width:"600px",
                        textAlign:"center",
                        margin:"0 auto",
                        padding:"20px 0",
                        backgroundColor:"#fff",
                        borderRadius:"10px"
                    }}>
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41081102000160" 
                        style={{
                            display:"inline-block",
                            textDecoration:"none",
                            height:"20px",
                            lineHeight:"20px",
                            color:"#939393"
                        }}
                        >
                            <img src={ImageBeiAn} style={{
                                float:"left",
                                margin:"0 5px"
                            }}/>
                            <span
                            style={{
                                float:"left"
                            }}

                            >豫公网安备 41081102000160号</span>    <a
                            style={{
                                marginLeft:"20px",
                                color:"#939393"
                            }}
                            href="http://beian.miit.gov.cn/"
                            >鲁ICP备19023307号-1</a>
                            </a>
                    </div>
		 
            </div>
        )
    }
}
