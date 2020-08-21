import './App.scss';
import React from 'react';

export default class App extends React.Component {
    public render = (): JSX.Element => {
        return (
            <React.Fragment>
                <h1>App</h1>
                <p className="h1">App</p>
            </React.Fragment>
        );
    };
}