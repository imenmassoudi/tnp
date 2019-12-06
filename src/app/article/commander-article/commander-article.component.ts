import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../../Article';
import {ArticleService} from '../../article.service';
import {MatDialog, MatDialogModule} from '@angular/material';
import {DetailArticleComponent} from '../detail-article/detail-article.component';
@Component({
  selector: 'app-commander-article',
  templateUrl: './commander-article.component.html',
  styleUrls: ['./commander-article.component.css']
})
export class CommanderArticleComponent implements OnInit {
  articles: Article[];
  article: Article;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  required = false;
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private articleService: ArticleService) {
    this.articles = this.articleService.getLesArticles();
  }
  openDialog() {
  alert('Votre commande a été bien passée');
    }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }
}
