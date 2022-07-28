import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiBaseUrl: string = environment.apiBaseUrl;
  private readonly apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getToken<T>() {
    return this.http.get<T>(`${this.apiBaseUrl}${environment.apiUrlToken}?api_key=${this.apiKey}`);
  }

  getSessionId<T>(data: any) {
    return this.http.post<T>(`${this.apiBaseUrl}${environment.apiUrlSessionId}?api_key=${this.apiKey}`, data);
  }

  getLatestMovie<T>() {
    return this.http.get<T>(`${this.apiBaseUrl}${environment.apiUrlLatestMovie}?api_key=${this.apiKey}`);
  }

}
