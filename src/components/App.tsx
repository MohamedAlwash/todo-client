import '../assets/scss/App.scss';
import React from 'react';
import Todo from './Todo';

export default class App extends React.Component {
    public render = (): JSX.Element => {
        return (
            <>
                <button className="btn btn-outline-primary" type="button">add</button>
                <Todo />
                <Todo />
                <Todo />
            </>
        );
    };
}