import React, { useState } from 'react';

import Editor from './Editor';
import Users from './Users';
import './App.css';

function App () {
    const [selectedUser, setSelectedUser] = useState(null);
    
    return (
        <div className="profile-app container">
            <div className="row">
            
                <div className="col-6">
                    {selectedUser && (<Editor {...selectedUser}/>)}
                </div>

                <div className="col-6">
                    <Users onUserSelect={setSelectedUser}/>
                </div>
            </div>
        </div>
    );
    
}

export default App;
