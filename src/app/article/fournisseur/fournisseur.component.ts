import { Component, OnInit } from '@angular/core';
import {Article} from '../../../Article';
import {Router} from '@angular/router';
import {ArticleService} from '../../article.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  articles: Article[];
  somme = 0;
  checked: boolean;
  oncheck(i, c) {
    if (c === true) {
      this.somme = this.somme + this.articles[i].prix;
    } else {
      if (this.somme !== 0) {
        this.somme = Math.round((this.somme - this.articles[i].prix) * 100) / 100 ;
      }
    }
  }
  // oncheck(i, c) {
  //   if (c === true) {
  //     this.somme = ((this.somme + this.articles[i].prix) * this.articles[i].qtes);
  // } else {
  //     console.log(this.somme);
  //     if (this.somme !== 0)
  //      this.somme = this.somme - (this.articles[i].prix * this.articles[i].qtes);
  //     console.log(this.somme);
  //   }
  // }
  constructor(private router: Router, private articleService: ArticleService) { }
  onCommander() {
    this.router.navigate(['/commander']);
  }
  ngOnInit() {
  this.articles = this.articleService.getLesArticles();
}

}
