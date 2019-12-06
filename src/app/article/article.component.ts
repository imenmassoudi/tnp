import { Component, OnInit } from '@angular/core';
import {Article} from '../../Article';
import {ArticleService} from '../article.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DetailArticleComponent} from './detail-article/detail-article.component';
import {AddArticleComponent} from './add-article/add-article.component';
import {ModifyArticleComponent} from '../modify-article/modify-article.component';
import {RemoveArticleComponent} from './remove-article/remove-article.component';
export interface DialogData {
  Id: string;
  Libelle: string;
  prix: number;
  article: Article;
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  id: number;
  searchText;
  constructor(public matDialog: MatDialog, private articleService: ArticleService) {
  }
  openDialogDetaill(ida): void {
    const dialogRef = this.matDialog.open(DetailArticleComponent, {
      width: '400px',
      data: {
        id: ida
      }
    });
  }
  openDialogAdd(): void {
    const dialogRef = this.matDialog.open(AddArticleComponent, {
      width: '400px'
    });
  }
  modify(ida: number) {
    const dialogRef = this.matDialog.open(ModifyArticleComponent, {
      width: '400px',
      data: {
        id: ida
      }
    });
  }
  remove(idt: number) {
    const dialogRef = this.matDialog.open(RemoveArticleComponent, {
      width: '400px',
      data: {
        id: idt
      }
    });
  }
    ngOnInit() {
      this.articles = this.articleService.getLesArticles();
    }

 }
