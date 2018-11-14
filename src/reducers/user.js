import { TYPES } from '../actions/user';

export function updateUser(state, updatedUser) {
    return state.map(user => user.id === updatedUser.id ? updatedUser : user);
}

function userReducer(state = [], action) {
    switch(action.type){
        case TYPES.STORE_USERS: return action.payload;
        case TYPES.UPDATE_USER: return updateUser(state, action.payload);
        default: return state;
    }
}

export default userReducer;
