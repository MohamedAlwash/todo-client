import '../assets/scss/App.scss';
import Container from './Container';
import IContainer from '../interfaces/IContainer';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps { }

interface IAppState {
    containers: IContainer[];
    isLoading: boolean;
    error: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
    public constructor(props: IAppProps) {
        super(props);
        
        this.state = {
            containers: [],
            isLoading: true,
            error: false
        };
    }

    public componentDidMount(): void {
        fetch('http://localhost:5000/containers')
            .then(response => response.json())
            .then(
                containers => this.setState({
                    containers,
                    isLoading: false
                })
            )
            .catch(error => {
                console.log(error);
                this.setState({ 
                    isLoading: false,
                    error: true
                });
            });
    }

    public render(): React.ReactNode {
        let element: React.ReactNode = <></>;

        if (this.state.isLoading) {
            element = <p>Loading</p>;
        } else if (this.state.containers.length >= 1) {
            element = this.renderContainers();
        } else if (this.state.error){
            element = <p>Server error</p>;
        } else {
            element = <p>No data</p>;
        }

        return element;
    }

    private renderContainers = (): React.ReactNode => this.state.containers.map(container => <Container key={container.id} container={container} />);
}