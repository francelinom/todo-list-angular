import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getListAll(): Observable<any> {
    return this.http.get<any>(`${API}tasks`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(`${API}`, task);
  }
}
