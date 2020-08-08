import {FETCH_USER_SUCCESS} from "../constants"

export function fetch_user() {
    return {
        type:FETCH_USER_SUCCESS
    }
}

export const get_user = () => {
    return dispatch => {
        fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        .then(res => res.JSON())
        .then(data => {
            dispatch(fetch_user(data.chengpinDetails[0]))
        })
        .catch(erroe => {
            console.log(error);
        })
    }
}