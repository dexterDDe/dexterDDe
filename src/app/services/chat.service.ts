import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'https://www.hostcatedral.com/api/app-chat/public/group-members-by-user/1';

  constructor(private http: HttpClient) { }

  getGroupMembers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
