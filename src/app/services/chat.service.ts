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

  getGroupsByUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/group-members-by-user/${userId}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getPrivateMessages(senderId: number, receiverId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/private-messages-by-user/${senderId}/${receiverId}`);
  }

  getGroupMessages(groupId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/group-messages-by-group/${groupId}`);
  }

  sendGroupMessage(message: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/group-messages`, message);
  }

  sendPrivateMessage(message: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/private-messages`, message);
  }
}
