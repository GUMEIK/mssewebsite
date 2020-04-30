/**
 * 总的控制modal的显示与隐藏
 */
import {projectModalReducer} from './projectModal'
import {introductionModalReducer} from './introductionModal'
import {commentsReducer} from './commentsModal'
export function modalControlReducer(state = {} ,action){
    const newState = {
        projectShow:projectModalReducer(state.projectShow,action),
        introductionShow:introductionModalReducer(state.introductionShow,action),
        commentsShow:commentsReducer(state.commentsShow,action)
    }
    return newState;
}