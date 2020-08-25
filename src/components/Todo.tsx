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
            <div>
                <input
                    type="text"
                    defaultValue={this.props.todo.value}
                    onChange={(event): void => this.props.onChangeHandler(event, this.props.todo.id)}
                />
                <button onClick={(): void => this.props.onClickHandler(this.props.todo.id)}>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
            </div>
        );
    }
}