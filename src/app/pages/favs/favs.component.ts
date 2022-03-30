import { Component } from '@angular/core';
import { Hit } from 'src/app/interfaces/news-response.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: [],
})
export class FavsComponent {
  constructor(private newsService: NewsService) {
    // We load our favs registered in localStorage
    this.newsService.favs = JSON.parse(localStorage.getItem('favs')!) || [];
  }

  /**
   * This functions return a Hit[] element wich it's our existing favs variable in newsService.
   */
  public get favs(): Hit[] {
    return this.newsService.favs;
  }
}
