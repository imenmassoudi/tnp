import {Component, Inject, OnInit} from '@angular/core';
import {Article} from '../../../Article';
import {ArticleService} from '../../article.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DetailArticleComponent} from '../detail-article/detail-article.component';

@Component({
  selector: 'app-remove-article',
  templateUrl: './remove-article.component.html',
  styleUrls: ['./remove-article.component.css']
})
export class RemoveArticleComponent implements OnInit {
article: Article[];
  constructor(private articleService: ArticleService,
              public dialogRef: MatDialogRef<RemoveArticleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  remove() {
    for (let i = 0; i < this.article.length; i++) {
      if (this.article[i].idArticle === this.data.id) {
        this.article.splice(i, 1);
      }
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.article = this.articleService.getLesArticles();
  }

}
