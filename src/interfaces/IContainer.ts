export default interface IContainer {
    id: number;
    title: string;
}

export class ContainerModel implements IContainer {
    public id = 0;
    public title = '';
}