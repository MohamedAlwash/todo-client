import { apiBaseUrl } from '../global/Constants';

export class RequestService {
    private url: string;

    public constructor(url: string) {
        this.url = `${apiBaseUrl}/${url}`;

        this.doRequestAsync(this.url);
    }

    private doRequestAsync(request: string): void {
        console.log(request);
    }
}