import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrlMembers = 'https://www.hostcatedral.com/api/app-chat/public/group-members-by-user/';
  private apiUrlMessages = 'https://www.hostcatedral.com/api/app-chat/public/group-messages-by-group/';

  constructor(private http: HttpClient) { }

  // Obtener miembros del grupo por usuario
  getGroupMembersByUser(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrlMembers}${userId}`);
  }

  // Obtener mensajes de un grupo
  getGroupMessagesByGroup(groupId: string): Observable<any> {
    return this.http.get(`${this.apiUrlMessages}${groupId}`);
  }

  // Enviar un mensaje al grupo
  sendMessageToGroup(message: { sender_id: number, group_id: number, content: string }): Observable<any> {
    const apiUrlSend = 'https://www.hostcatedral.com/api/app-chat/public/group-messages';
    return this.http.post(apiUrlSend, message);
  }
}
