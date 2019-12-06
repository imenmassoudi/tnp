import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../../Article';
import {ArticleService} from '../../article.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
articles: Article[];
article: Article;
indice: number;
somme = 0;
ok : boolean;
oncheck(i) {
this.somme = this.somme + this.articles[i].prix;
}
  constructor(private router: Router, private articleService: ArticleService) { }
takeMeToArticles() {
    this.router.navigate(['/articles']);
}

  ngOnInit() {
  }

}
