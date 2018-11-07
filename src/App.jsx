import React, { Component } from 'react';

import Editor from './Editor';
import Users from './Users';
import './App.css';

class App extends Component {
    state = {
        isEditor: true,
    }

    toggleForm = () => this.setState(({isEditor, ...prevState}) => ({
        ...prevState,
        isEditor: !isEditor
    }));

    render() {
        const {isEditor} = this.state;
        return (
            <div className="profile-app container">
                <div className="row">
                    <div className="col-6">
                        <div style={{ padding: '5px', textAlign: 'center'}}>
                            <button
                                className={`btn btn-${isEditor ? 'danger' : 'success'}`}
                                onClick={this.toggleForm}
                            >
                            {isEditor ? 'Hide' : 'Show'} editor
                            </button>
                        </div>
                        {isEditor && (<Editor name="John" surname="Dou"/>)}
                    </div>
                    <div className="col-6">
                        <Users />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
