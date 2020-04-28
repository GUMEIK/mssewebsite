import {introductionShowType,introductionHideType} from '../../action/modalControl'  
export function introductionModalReducer(state = false,action){
    if(action.type === introductionShowType){
        return true;
    }else if(action.type === introductionHideType){
        return false;
    }
    return state;
}