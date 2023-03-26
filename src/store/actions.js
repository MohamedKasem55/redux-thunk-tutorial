import { createStore, applyMiddleware } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import  axios  from "axios";
export const fetchUsersRequest = () => ({
    type: "fetchUsersRequest",
})
export const fetchUsersSuccess = (users) => ({
    type: "fetchUsersSuccess",
    payload: users
})
export const fetchUsersFailure = (error) => ({
    type: "fetchUsersFailure",
    payload: error

})
const inititalState = {
    data: [],
    error: "",
    loading: false
}
export const usersReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "fetchUsersRequest":
            return {
                ...state,
                loading: true,
            }
            break;
        case "fetchUsersSuccess":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            break;
        case "fetchUsersFailure":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break;
    }
}
export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://fakestoreapi.com/users').then(Response => {
            dispatch(fetchUsersSuccess(Response.data))
        }).catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
export const store = createStore(usersReducer, applyMiddleware(ThunkMiddleware))
store.subscribe(()=>console.log(store.getState()))

