import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  groups: any[] = [];
  userId: number = 1;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getGroupsByUser(this.userId).subscribe(data => {
      this.groups = data;
    });
  }

}
