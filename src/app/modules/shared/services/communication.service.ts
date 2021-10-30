import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) {}

  /**
   * Function to do a GET request
   */
  public get(url: string, params?: any): Observable<any> {
    return this.http.get(url, params);
  }
}
