import React from 'react';

const UsersList = ({ users, onUserSelect }) => (
    <div className="users list-group mt-3">
        {!users && (<div className="list-group-item">There is no users</div>)}
        {(users && users.length === 0) && (
            <div className="list-group-item disabled">
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

export default UsersList;
