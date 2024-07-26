import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatGrupalPage } from './chat-grupal.page';

describe('ChatGrupalPage', () => {
  let component: ChatGrupalPage;
  let fixture: ComponentFixture<ChatGrupalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGrupalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
