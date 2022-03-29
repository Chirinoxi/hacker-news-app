import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Hit } from '../../interfaces/news-response.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  private _options: string[] = ['angular', 'reactjs', 'vuejs'];

  @Input() selectedOption: string = this._options[0];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.obtainHackerNews(this.selectedOption, 0).subscribe(({ hits }) => {
      hits = hits.filter(this.newsService.filterData);
      this.newsService.hits = hits;
    });
  }

  public searchNews() {
    // Probaremos con página 0 por el momento !
    this.newsService.obtainHackerNews(this.selectedOption, 0)
      .subscribe(
        (response) => { 
          this.newsService.hits = response.hits.filter(this.newsService.filterData);
      });
  }

  public get options(): string[] {
    return this._options;
  }

  public get hits(): Hit[] {
    return this.newsService.hits;
  }
}
