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

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${API}tasks/${id}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(`${API}tasks`, task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put<any>(`${API}tasks/${task.id}`, task);
  }

  deleteTask(id: any): Observable<any> {
    return this.http.delete<any>(`${API}tasks/${id}`);
  }
}
