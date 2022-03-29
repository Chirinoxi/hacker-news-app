import { Component } from '@angular/core';
import { Hit } from 'src/app/interfaces/news-response.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
})
export class FavsComponent {
  constructor(private newsService: NewsService) {}

  public get favs(): Hit[] {
    return this.newsService.favs;
  }
}
