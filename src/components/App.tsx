import '../assets/scss/App.scss';
import Container from './Container';
import IContainer from '../interfaces/IContainer';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps { }

interface IAppState {
    containers: IContainer[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    public constructor(props: IAppProps) {
        super(props);      
    }

    public componentDidMount(): void {
        fetch('http://localhost:5000/containers')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        containers: result
                    });
                },
                error => console.log(error));
    }

    public render(): JSX.Element {
        
        return (
            <h1>App</h1>
        );
    }
}