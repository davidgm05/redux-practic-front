export const GET_USERS = "GET_USERS";
export const POST_USERS = "POST_USERS";


export const getUsers = () => {
    return{
        type: GET_USERS,
    }
}

export const postUsers = (users) => {
    return{
        type: POST_USERS,
        payload: {
            users,
        }
    }
}