import { POST_USERS } from "./usersActions"


const initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_USERS:
            return {
                ...state,
                users: action.payload.users,
            }
        default:
            return state
    }
}

export default usersReducer