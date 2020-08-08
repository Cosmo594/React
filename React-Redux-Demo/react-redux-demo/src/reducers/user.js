import {FETCH_USER_SUCCESS} from "../constants"

const initialState = {
    user:{}
}

const user = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            return {
                user:action.user
            };
        default:
            return state;
    }
}

export default user