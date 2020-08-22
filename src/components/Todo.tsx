import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashAlt} from '@fortawesome/free-regular-svg-icons';

export default class Todo extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="input-group">
                <input type="text" className="form-control" />
                <button className="btn btn-outline-danger" type="button"><FontAwesomeIcon icon={faTrashAlt}/> delete</button>
            </div>
        );
    }
}