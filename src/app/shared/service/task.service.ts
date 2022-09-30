import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './../models/task';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getListAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API}tasks`);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${API}tasks/${id}`);
  }

  getListProgress(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API}tasks/progress`);
  }

  getListNotStarted(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API}tasks/notstarted`);
  }

  getListCompleted(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API}tasks/completed`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${API}tasks`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${API}tasks/${task.id}`, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${API}tasks/${id}`);
  }
}
