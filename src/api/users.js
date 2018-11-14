export function fetchUsers(setUsers) {
    return () => {
        setUsers([]);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }
}