import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ArticleService} from '../../article.service';
import {DetailArticleComponent} from '../detail-article/detail-article.component';
import {Article} from '../../../Article';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  ajout: FormGroup;
   article: Article;
  constructor( public dialogRef: MatDialogRef<DetailArticleComponent>,
               private articleService: ArticleService,
               private ajouterArticle: FormBuilder) {
    this.ajout = this.ajouterArticle.group({
      libelle: new FormControl('', [
        Validators.required
      ]),
      Prix: new FormControl('', [
        Validators.required
      ]),
      qtes: new FormControl('', [
        Validators.required
      ])
    });
  }
  ngOnInit() {
    this.article = new Article();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  add(image) {
    if (this.ajout.invalid) {return; }
    image = image.replace(/C:\\fakepath\\/, '' );
    image = image.replace(/.jpg/, '' );
    this.article.photo = image;
    this.articleService.addArticle(this.article);
    console.log(image);
  }

  get libelle() { return this.ajout.get('libelle'); }
  get Prix() { return this.ajout.get('Prix'); }
  get qtes() { return this.ajout.get('qtes'); }
}
