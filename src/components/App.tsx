import '../assets/scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ITodo from '../interfaces/ITodo';
import React from 'react';
import Todo from './Todo';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps { }

interface IAppState {
    todos: ITodo[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    private constructor(props: IAppProps) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    value: 'My first todo'
                },
                {
                    id: 2,
                    value: 'My second todo'
                }
            ]
        };
    }

    private addTodo = (): void => {
        const todo: ITodo = {
            id: Date.now(),
            value: ''
        };

        this.setState({ todos: [...this.state.todos, todo] });
    };

    private removeTodo = (todoId: number): void => {
        const todos = this.state.todos.filter(todo => todo.id !== todoId);

        this.setState({ todos });
    };

    private editTod = (event: React.ChangeEvent<HTMLInputElement>, todoId: number): void => {   
        const value: string = event.target.value;
        const todoIndex = this.state.todos.findIndex(todo => todo.id === todoId);
        const todos = [...this.state.todos];
        todos[todoIndex] = { ...todos[todoIndex], value };

        this.setState({ todos });
    };

    public render = (): JSX.Element => {
        return (
            <>
                <button onClick={this.addTodo}>
                    <FontAwesomeIcon icon={faPlus} /> Add new todo
                </button>
                {this.state.todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <Todo todo={todo} onChangeHandler={this.editTod} onClickHandler={this.removeTodo} />
                        </div>
                    );
                })}
            </>
        );
    };
}