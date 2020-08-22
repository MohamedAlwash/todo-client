import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ITodo from '../interfaces/ITodo';
import React from 'react';
import { faTrashAlt} from '@fortawesome/free-regular-svg-icons';

interface ITodoProps {
    todo: ITodo;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, todoId: number) => void;
    onClickHandler: (todoId: number) => void;
}

export default class Todo extends React.Component<ITodoProps> {
    private constructor(props: ITodoProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    defaultValue={this.props.todo.value}
                    onChange={(event): void => this.props.onChangeHandler(event, this.props.todo.id)}
                />
                <button className="btn btn-outline-danger" type="button" onClick={(): void => this.props.onClickHandler(this.props.todo.id)}>
                    <FontAwesomeIcon icon={faTrashAlt}/> delete
                </button>
            </div>
        );
    }
}