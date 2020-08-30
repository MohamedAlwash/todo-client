import IContainer from '../interfaces/IContainer';
import React from 'react';

interface IContainerProps {
    container: IContainer;
}

export default class Container extends React.Component {

    public render(): JSX.Element {
        return <h1>container</h1>;
    }

    // private constructor(props: IAppProps) {
    //     super(props);

    //     this.state = {
    //         todos: [
    //             {
    //                 id: 1,
    //                 title: 'My first todo'
    //             },
    //             {
    //                 id: 2,
    //                 title: 'My second todo'
    //             }
    //         ]
    //     };
    // }

    // private addTodo = (): void => {
    //     const todo: ITodo = {
    //         id: Date.now(),
    //         title: ''
    //     };

    //     this.setState({ todos: [...this.state.todos, todo] });
    // };

    // private removeTodo = (todoId: number): void => {
    //     const todos = this.state.todos.filter(todo => todo.id !== todoId);

    //     this.setState({ todos });
    // };

    // private editTod = (event: React.ChangeEvent<HTMLInputElement>, todoId: number): void => {   
    //     const value: string = event.target.value;
    //     const todoIndex = this.state.todos.findIndex(todo => todo.id === todoId);
    //     const todos = [...this.state.todos];
    //     todos[todoIndex] = { ...todos[todoIndex], value };

    //     this.setState({ todos });
    // };

    // public render = (): JSX.Element => {
    //     return (
    //         <>
    //             <button onClick={this.addTodo}>
    //                 <FontAwesomeIcon icon={faPlus} /> Add new todo
    //             </button>
    //             {this.state.todos.map(todo => {
    //                 return (
    //                     <div key={todo.id}>
    //                         <Todo todo={todo} onChangeHandler={this.editTod} onClickHandler={this.removeTodo} />
    //                     </div>
    //                 );
    //             })}
    //         </>
    //     );
    // };
}