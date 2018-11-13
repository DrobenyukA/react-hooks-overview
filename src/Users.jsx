import React, { useState, useEffect } from 'react';

function fetchUsers(setUsers) {
    return function () {
        setUsers([]);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }
}

function Users({ onUserSelect }) {
    const [users, setUsers] = useState(null);
    // [] = means lunch hook only once
    useEffect(fetchUsers(setUsers), []);

    return (
        <div className="users list-group mt-3">
            {!users && (<div className="list-group-item">There is no users</div>)}
            {(users && users.length === 0) && (
                <div
                    className="list-group-item disabled"
                >
                    Loading...
                </div>
            )}
            {(users && users.length) && (users.map(user => (
                <button
                    key={user.id}
                    style={{ cursor: 'pointer' }}
                    className="list-group-item list-group-item-action"
                    onClick={() => onUserSelect(user)}
                >
                    {user.name}
                </button>
            )))}
        </div>
    ) 
}

export default Users;
