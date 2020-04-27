import {projectShowReducer} from './progectShow'
export function reducer (state = {},action){
    const newState = {
        projectShow:projectShowReducer(state.projectShow,action)
    }
    return newState;
}