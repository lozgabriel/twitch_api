import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GaleriaService {

  private BASE_URL: string = environment.BASE_URL;
  private BASE_URL2: string = environment.BASE_URL2;
  private SEARCH_URL: string = environment.SEARCH_URL;
  private termosBusca: Subject<string> = new Subject<string>();

  private users: any[];

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
                                 'Client-ID': 'lqs64mj5bh5srmsp03b1ek05tkmjod' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getTwitch(): Promise<any> {
      return this.http
        .get(this.BASE_URL, this.options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
       // .map(res => res.json())
       // .map(json => console.log(json.top));
  }

  getTwitch2(): Promise<any> {
    return this.http
      .get(this.BASE_URL2, this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
     // .map(res => res.json())
     // .map(json => console.log(json.top));
}

  private extractData(res: Response) {
      const body = res.json();
      return body || {};
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

  buscarGame(term) {
    return this.http
      .get(this.SEARCH_URL + 'query=' + term, this.options)
      .map(this.extractData)
      .subscribe(
        response => this.termosBusca.next(response),
        this.handleError
    );
  }

  public getResults(): Observable<any> {
    return this.termosBusca.asObservable();
  }

}
