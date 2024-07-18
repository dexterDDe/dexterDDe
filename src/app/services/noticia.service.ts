import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { NoticiaResponse } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

  gettopheadlines(){
      return this.http.get<NoticiaResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08bcbfe45a234e788d5067f9d8ecf13f')
  }

}
