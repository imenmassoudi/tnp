import {Injectable, Input} from '@angular/core';
import {Article} from '../Article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  lesArticles: Article[];
  a1 = new Article();
  a2 = new Article();
  a3 = new Article();


  constructor() {
    this.a1.ajouter(1, 'Biberon chicco', 12.600, false, '1', new Date('1999/12/01'), 0);
    this.a2.ajouter(2, 'Sucette', 12.540, false, '2' , new Date('1999/12/01'), 120);
    this.a3.ajouter(3, 'Bavoir', 5.760, true, '3', new Date('1999/12/01'), 150);
    this.lesArticles = [this.a1, this.a2, this.a3];
  }
  article: Article;
  getLesArticles() {
    return this.lesArticles;
  }

  getArticlesById(id: number): Article {
   return this.lesArticles.filter(article => article.idArticle === id)[0];
  }
  addArticle(a: Article) {
  this.lesArticles.push(a);
  }
  modifyService(id, article ) {
    let i = 0;
    while (this.lesArticles[i].idArticle !== id) {
      i++;
    }
    this.lesArticles[i] = article;
    console.log(this.lesArticles);
  }
      }


