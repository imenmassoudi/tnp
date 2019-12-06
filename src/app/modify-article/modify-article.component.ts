import {Component, Inject, OnInit} from '@angular/core';
import {Article} from '../../Article';
import {ArticleService} from '../article.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-article',
  templateUrl: './modify-article.component.html',
  styleUrls: ['./modify-article.component.css']
})
export class ModifyArticleComponent implements OnInit {
  articles: Article[];
  article: Article;
  constructor(private articleService: ArticleService,
              public dialogRef: MatDialogRef<ModifyArticleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  nvarticle() {
    this.articleService.modifyService(this.data.id, this.article);
  }
  close() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.article = this.articleService.getArticlesById(this.data.id);
  }

}
