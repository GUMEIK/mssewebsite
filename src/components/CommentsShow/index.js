import ModalCom from '../ModalCom'
import EditorCom from '../EditorCom';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {commentsShowAction,commentsHideAction} from '../../store/action/modalControl'
class CommentsShow extends Component {
    render() {
        return (
            <ModalCom
            title="留言板~客官来留个言呀！"
            visible={this.props.visible}
            showModal={this.props.showModal}
            hideModal={this.props.hideModal}
            >
                <EditorCom/>                
            </ModalCom>
        )
    }
}
function mapStateToProps(state){
    return {
        visible:state.modalControl.commentsShow
    }
}
function mapDispatchToProps(dispatch){
    return {
        showModal(){
            dispatch(commentsShowAction);
        },
        hideModal(){
            dispatch(commentsHideAction)
        }
    }
}
const hoc = connect(mapStateToProps,mapDispatchToProps);
export default hoc(CommentsShow)
