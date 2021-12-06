import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../shared/global';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  BASE_PATH = GlobalVariable.BASE_PATH;
  baseUrl: string = this.BASE_PATH+'/stats/';

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
  
}