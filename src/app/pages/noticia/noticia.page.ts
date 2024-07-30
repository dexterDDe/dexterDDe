import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { NoticiaResponse, Article } from '../../interfaces/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: 'noticia.page.html',
  styleUrls: ['noticia.page.scss']
})
export class NoticiaPage implements OnInit {

  noticias: Article[] = [];

  constructor(private serviceNoticias: NoticiaService, private router: Router) {}

  ngOnInit() {
    this.serviceNoticias.gettopheadlines()
      .subscribe((resp) => {
        console.log(resp.articles);
        this.noticias = resp.articles;
      });
  }
  irChat() {
    this.router.navigate(['/chat-grupal']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
