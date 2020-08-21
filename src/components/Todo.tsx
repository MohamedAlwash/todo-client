import React from 'react';

export default class Todo extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="input-group">
                <input type="text" className="form-control" />
                <button className="btn btn-outline-danger" type="button">delete</button>
            </div>
        );
    }
}