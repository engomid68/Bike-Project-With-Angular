import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpClientService {
    
    private apiAdd: string = environment.apiAdd;

    constructor(
        private http: HttpClient
    ) {

    }

    getBikesAngular(): Promise<any> {
        return this.http.get(this.apiAdd+ 'api/v1/bikes')
        .toPromise();
    }

    deleteBike(id: number): Promise<any> {
        return this.http.delete(this.apiAdd + 'api/v1/bikes/' + id)
        .toPromise();    
    }

    putBike(id:number,putdata:any): Promise<any>{
        return this.http.put(this.apiAdd + `api/v1/bikes/${id}`,putdata)
        .toPromise();
    }

    postBike(postdata:any): Promise<any>{
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(postdata);
        console.log(body);
        return this.http.post(this.apiAdd + `api/v1/bikes/`, body,{'headers':headers})
        .toPromise();
    }
}