import { Component, OnInit } from '@angular/core';
import {matMenuAnimations} from '@angular/material';
import {Router} from '@angular/router';
import {Article} from '../../../Article';
import {ArticleService} from '../../article.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
searchText;
articles: Article[];
  constructor(private router: Router, private articleService: ArticleService) {
  this.articles = this.articleService.getLesArticles();
  }

  ngOnInit() {
  }

}
