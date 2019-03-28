import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = 'b01731938d2d42e98fffcb0f71599ce2';
  apiUrl = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get(this.apiUrl + 'sources?language=en&apiKey=' + this.apiKey);
  }

  initArticles(){
    return this.http.get(this.apiUrl + 'top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }

  getArticlesById(source: string){
    return this.http.get(this.apiUrl + 'top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
  }
}
