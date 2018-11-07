import React, { useState } from 'react';

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function onChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}

const Form = (props) => {
    const name = useFormInput(props.name);
    const surname = useFormInput(props.surname)
    return (
        <div>
            <input name="name" type="text" {...name} />
            <br/>
            <input name="surname" type="text" {...surname} />
        </div>
    )
}

export default Form;
