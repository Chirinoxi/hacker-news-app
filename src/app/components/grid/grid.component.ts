import { Component, Input } from '@angular/core';
import { Hit } from 'src/app/interfaces/news-response.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: [],
})
export class GridComponent {
  @Input() public hits!: Hit[];
  @Input() public modeFav!: boolean;

  constructor(private newsService: NewsService) {}
}
