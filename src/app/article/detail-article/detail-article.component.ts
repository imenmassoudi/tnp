import {Component, Inject, Input, OnInit} from '@angular/core';
import {Article} from '../../../Article';
import {ArticleService} from '../../article.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  article: Article;
  constructor( public dialogRef: MatDialogRef<DetailArticleComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private articleService: ArticleService) { }

  ngOnInit() {
    this.article = this.articleService.getArticlesById(this.data.id);
  }

}
