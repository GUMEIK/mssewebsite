import {commentsShowType,commentsHideType, commentsHideAction} from '../../action/modalControl'
export function commentsReducer(state = false,action){
    if(action.type === commentsShowType){
        return true;
    }else if(action.type === commentsHideType){
        return false;
    }
    return state;
}