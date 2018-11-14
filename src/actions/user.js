export const STORE_USERS = 'STORE-USERS'
export const UPDATE_USER = 'UPDATE_USER'

export function store(dispatch) {
    return users => dispatch({ type: STORE_USERS, payload: users})
}

export function update(dispatch) {
    return user => dispatch({ type: UPDATE_USER, payload: user })
}

export const TYPES = {
    STORE_USERS,
    UPDATE_USER
}

export const userAction ={
    store,
    update,
};