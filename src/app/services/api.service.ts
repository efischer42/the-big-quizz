import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}
  getRoot() {
    return this.http.get(`${this.baseUrl}/`);
  }
}
