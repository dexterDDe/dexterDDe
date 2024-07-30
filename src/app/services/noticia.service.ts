import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/LoginResponse';
import { NoticiaResponse } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private apiUrl = 'https://www.hostcatedral.com/api/app-aranceles/public';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const url = `${this.apiUrl}/login`;

    return this.http.post<LoginResponse>(url, formData);
  }

  getUsuarios(): Observable<any> {
    const url = `${this.apiUrl}/users`;
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.get(url, options);
  }

  gettopheadlines(): Observable<NoticiaResponse> {
    return this.http.get<NoticiaResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08bcbfe45a234e788d5067f9d8ecf13f');
  }
}
