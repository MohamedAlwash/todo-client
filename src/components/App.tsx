import '../assets/scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ITodo from '../interfaces/ITodo';
import React from 'react';
import Todo from './Todo';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps {}

interface IAppState {
    todos: ITodo[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    private constructor(props: IAppProps) {
        super(props);

        this.state = {
            todos: [
                {
                    id: Date.now(),
                    value: 'My first todo'
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
    }

    private removeTodo = (todoId: number): void => {
        const todos = this.state.todos.filter(todo => todo.id !== todoId);

        this.setState({ todos });
    }

    private editTod = (event: React.ChangeEvent<HTMLInputElement>, todoId: number): void => {
        const value: string = event.target.value;
        const todo: ITodo = {
            id: todoId,
            value 
        };
        const todos = this.state.todos.filter(todo => todo.id !== todoId);
        todos.push(todo);

        this.setState({ todos });
    }

    public render = (): JSX.Element => {
        return (
            <>
                <button className="btn btn-outline-primary" type="button" onClick={this.addTodo}>
                    <FontAwesomeIcon icon={faPlus}/> add
                </button>
                {this.state.todos.map(todo => {
                    return <Todo todo={todo} key={todo.id} onChangeHandler={this.editTod} onClickHandler={this.removeTodo} />;
                })}
            </>
        );
    };
}