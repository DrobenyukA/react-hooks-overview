import React, { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState(props.name);
    const [surname, setSurname] = useState(props.surname)
    return (
        <div>
            <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input name="surname" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
    )
}

export default Form;
