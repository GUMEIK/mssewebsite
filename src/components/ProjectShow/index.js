import React, { Component } from 'react'
import ModalCom  from '../ModalCom'
import {connect} from "react-redux"
import {store} from '../../store/store'
import ProjectCom from '../Project'
class ProjectShow extends Component {
    render() {
        return (
            <div>
                <ModalCom
                title="项目介绍"
                visible={this.props.isShowModal}
                showModal={()=>{
                    store.dispatch({
                        type:"projectShow"
                    })
                }}
                hideModal={()=>{
                    store.dispatch({
                        type:"projectHide"
                    })
                }}
                >
                    <ProjectCom/>
                </ModalCom>
            </div>
        )
    }
}


function mapStateToProps (state){
    return {
        isShowModal:state.projectShow
    }
}
const hoc = connect(mapStateToProps,null)
export default hoc(ProjectShow)


