import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ArticleComponent} from './article/article.component';
import {DetailArticleComponent} from './article/detail-article/detail-article.component';
import {AccueilComponent} from './article/accueil/accueil.component';
import {CommanderArticleComponent} from './article/commander-article/commander-article.component';
import {AddArticleComponent} from './article/add-article/add-article.component';
import {FournisseurComponent} from './article/fournisseur/fournisseur.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'fournisseur', component: FournisseurComponent},
  { path: 'articles', component: ArticleComponent},
  { path: 'commander', component: CommanderArticleComponent},
  { path: '**', component: LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
