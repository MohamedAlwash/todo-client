import '../assets/scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Todo from './Todo';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

export default class App extends React.Component {
    public render = (): JSX.Element => {
        return (
            <>
                <button className="btn btn-outline-primary" type="button"><FontAwesomeIcon icon={faPlus}/> add</button>
                <Todo />
                <Todo />
                <Todo />
            </>
        );
    };
}