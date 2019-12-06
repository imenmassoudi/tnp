import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {
  _MatMenuDirectivesModule,
  MatCheckboxModule,
  MatMenu,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatStepperModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
  MAT_DATE_LOCALE, MatBadgeModule, MatBottomSheetModule,
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule, MatDialogRef,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatSnackBarModule,
  MatTableModule,
  MatTooltipModule, NativeDateModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheet } from '@angular/material';
import {ArticleComponent} from './article/article.component';
import {DetailArticleComponent} from './article/detail-article/detail-article.component';
import {AddArticleComponent} from './article/add-article/add-article.component';
import {MenuComponent} from './article/menu/menu.component';
import { ModifyArticleComponent } from './modify-article/modify-article.component';
import { RemoveArticleComponent } from './article/remove-article/remove-article.component';
import { AccueilComponent } from './article/accueil/accueil.component';
import { CommanderArticleComponent } from './article/commander-article/commander-article.component';
import {MatFileUploadModule} from 'angular-material-fileupload';
import {FournisseurComponent} from './article/fournisseur/fournisseur.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    DetailArticleComponent,
    MenuComponent,
    AddArticleComponent,
    ModifyArticleComponent,
    RemoveArticleComponent,
    AccueilComponent,
    CommanderArticleComponent,
    FournisseurComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatStepperModule,
    MatCheckboxModule,
    MatFileUploadModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

  ],

  bootstrap: [AppComponent],

  entryComponents: [DetailArticleComponent, AddArticleComponent, ModifyArticleComponent, RemoveArticleComponent]

})
export class AppModule { }
