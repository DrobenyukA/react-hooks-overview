import React, { useState, useEffect } from 'react';

let oldTitle = null;

function useFormInput(initialValue) {
    // custom hook
    const [value, setValue] = useState(initialValue);
    
    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue)
        }
    }, [initialValue]);

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
    const [firstName, lastName] = props.name.split(' ').filter(value => value.search(/(Mrs|Ms)/gi) )
    const name = useFormInput(firstName);
    const surname = useFormInput(lastName);
    const title = `${name.value} ${surname.value}`;

    useEffect(setDocumentTitle(title), [title, props.name]);

    return (
        <div className="editor">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input id="name" className="form-control" name="name" type="text" {...name} />
            </div>
            <div className="form-group">
                <label htmlFor="surname">Surname:</label>
                <input id="surname" className="form-control" name="surname" type="text" {...surname} />
            </div>
            <button className="btn btn-primary">Save user</button>
        </div>
    )
}

export default Form;
