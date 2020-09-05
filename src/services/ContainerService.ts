import { RequestService } from './RequestService';

export class ContainerService extends RequestService {
    private url = '';

    public constructor(url: string) {
        super(url);
        this.url = url;
    }

    public GetContainers(): void {
        console.log('GetContainers');
    }
}