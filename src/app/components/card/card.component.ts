import { Component, Input } from '@angular/core';
import { Hit } from '../../interfaces/news-response.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() hit!: Hit;
  @Input() index!: number;
  @Input() modeFav!: boolean;

  constructor(private newsService: NewsService) {}

  public redirectToURL(url: any): void{
    if(url != null) window.open(url);
  }

  public addToFavourites(index: number): void{
    // We obtain the i-th hit.
    const hit = this.newsService.hits[index];
    // We add the obtained hit into the favs array
    this.newsService.favs.push(hit);
    localStorage.setItem('favs', JSON.stringify(this.newsService.favs));
  }
}
