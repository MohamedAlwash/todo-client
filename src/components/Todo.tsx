import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ITodo from '../interfaces/ITodo';
import React from 'react';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

interface ITodoProps {
    todo: ITodo;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, todoId: number) => void;
    onClickHandler: (todoId: number) => void;
}

export default class Todo extends React.Component<ITodoProps> {
    private constructor(props: ITodoProps) {
        super(props);
    }

    private handleOnInput = (): void => {
        console.log('handleOnInput');
    };

    public render(): JSX.Element {
        return (
            <>
                <div
                    suppressContentEditableWarning
                    contentEditable
                    onInput={this.handleOnInput}>{this.props.todo.value}
                </div>
                <button onClick={(): void => this.props.onClickHandler(this.props.todo.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <br />
            </>
        );
    }
}