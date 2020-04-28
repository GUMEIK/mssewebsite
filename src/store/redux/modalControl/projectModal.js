import {projectShowType,projectHideType} from '../../action/modalControl'
export function projectModalReducer(state = false,action){
    if(action.type === projectShowType){
        return true;
    }else if(action.type === projectHideType){
        return false;
    }
    return state;
}