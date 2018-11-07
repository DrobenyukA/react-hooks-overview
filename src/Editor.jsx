import React, { useState, useEffect } from 'react';

let oldTitle = null;

function useFormInput(initialValue) {
    // custom hook
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (e) => setValue(e.target.value)
    }
}

function cleanupTitle() {
    document.title = oldTitle;
    oldTitle = null;
}

function setDocumentTitle(title) {
    if (!oldTitle) {
        oldTitle = document.title;
    }
    return () => {
        document.title = title;
        return cleanupTitle
    };
}

const Form = (props) => {
    const name = useFormInput(props.name);
    const surname = useFormInput(props.surname);
    const title = `${name.value} ${surname.value}`;

    useEffect(setDocumentTitle(title), [title]);

    return (
        <div className="editor">
            <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input id="name" className="form-control" name="name" type="text" {...name} />
            </div>
            <div class="form-group">
                <label htmlFor="surname">Surname:</label>
                <input id="surname" className="form-control" name="surname" type="text" {...surname} />
            </div>
            <button className="btn btn-primary">Add new user</button>
        </div>
    )
}

export default Form;
