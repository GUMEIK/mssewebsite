import React, { Component } from 'react'
import ModalCom  from '../ModalCom'
import {connect} from "react-redux"
import {store} from '../../store/store'
import ProjectCom from '../Project' 
import {projectShowAction,projectHideAction} from '../../store/action/modalControl'
class ProjectShow extends Component {
    render() {
        return (
            <div>
                <ModalCom
                title="项目介绍"
                visible={this.props.isShowModal}
                showModal={()=>{
                    store.dispatch(projectShowAction)
                }}
                hideModal={()=>{
                    store.dispatch(projectHideAction)
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
        isShowModal:state.modalControl.projectShow
    }
}
const hoc = connect(mapStateToProps,null)
export default hoc(ProjectShow)


