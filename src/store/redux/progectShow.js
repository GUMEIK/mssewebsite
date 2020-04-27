import {projectShowType,projectHideType} from '../action/projectShow'
export function projectShowReducer(state = false,action){
    if(action.type === projectShowType){
        return true;
    }else if(action.type === projectHideType){
        return false;
    }
    return false;
}