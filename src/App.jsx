import React, { useState, useEffect, useReducer } from 'react';

import './App.css';
import Editor from './components/Editor';
import UsersList from './components/UsersList';
import reducer from './reducers/user';
import { userAction } from './actions/user';
import { fetchUsers } from './api/users';

function App () {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, dispatch] = useReducer(reducer, null);

    // [] = means lunch hook only once
    useEffect(fetchUsers(userAction.store(dispatch)), []);
    console.log('users', users)
    return (
        <div className="profile-app container">
            <div className="row align-items-center">
            
                <div className="col-6">
                    {selectedUser 
                        ? <Editor user={selectedUser} onUpdate={userAction.update(dispatch)} /> 
                        : <div className="alert alert-info">Please select a user to edit</div>
                    }
                </div>

                <div className="col-6">
                    <UsersList users={users} onUserSelect={setSelectedUser}/>
                </div>
            </div>
        </div>
    );
    
}

export default App;
