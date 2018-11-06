import React, { Component } from 'react';

import From from './Form';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <From name="John" surname="Dou"/>
            </div>
        );
    }
}

export default App;
