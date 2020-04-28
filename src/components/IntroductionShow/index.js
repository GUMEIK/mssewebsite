import React, { Component } from 'react'
import IntroductionCom from '../IntroductionCom'
import ModalCom from '../ModalCom'
import {connect} from 'react-redux'
import {introductionShowAction,introductionHideAction} from '../../store/action/modalControl'
class IntroductionShow extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ModalCom 
                    title="谷美是谁呀"
                    {...this.props}
                >
                    <IntroductionCom/>
                </ModalCom>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        visible:state.modalControl.introductionShow
    }
}
function mapDispatchToProps(dispatch){
    return {
        showModal(){
            dispatch(introductionShowAction)
        },
        hideModal(){
            dispatch(introductionHideAction)
        }
    }
}
const hoc = connect(mapStateToProps,mapDispatchToProps);
export default hoc(IntroductionShow);