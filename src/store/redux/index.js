/**
 * 总的状态处理函数
 */
import {modalControlReducer} from './modalControl/index'
export function reducer (state = {},action){
    const newState = {
        modalControl:modalControlReducer(state.modalControl,action)
    }
    return newState;
}