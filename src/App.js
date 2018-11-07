import React, { Component } from 'react';

import From from './Form';
import './App.css';

class App extends Component {
    render() {
        const profile = {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            border: 'none',
            justifyContent: 'space-between',
        }

        const side = {
            width: '100%',
            padding: '15px'
        }
        return (
            <div className="profile-app" style={profile}>
                <div style={side}>
                    <From name="John" surname="Dou"/>
                </div>
                <div style={side}>
                    Profile
                </div>
            </div>
        );
    }
}

export default App;
