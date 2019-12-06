import { Pipe, PipeTransform } from '@angular/core';
import {Article} from '../Article';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(articles: Article[], searchTerm: string): Article[] {
     if (!articles || !searchTerm) {
       return articles;
     }
     return articles.filter(article =>
       article.libelle.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
