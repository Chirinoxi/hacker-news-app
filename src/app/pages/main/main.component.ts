import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Hit } from '../../interfaces/news-response.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [],
})
export class MainComponent implements OnInit {
  private _options: string[] = [
    'Select your news',
    'angular',
    'reactjs',
    'vuejs',
  ];
  private _page: number = 0;

  @Input() selectedOption: string = this._options[0];

  constructor(private newsService: NewsService) {
    this.selectedOption =
      JSON.parse(localStorage.getItem('selectedOption')!) || 'angular';
    this.newsService.favs = JSON.parse(localStorage.getItem('favs')!) || [];
  }

  ngOnInit(): void {
    // By default we search the angular news !
    if (this.selectedOption != this._options[0]){
      this.newsService
        .obtainHackerNews(this.selectedOption, this._page)
        .subscribe(({ hits }) => {
          hits = hits.filter(this.newsService.filterData).slice(0, 8);
          this.newsService.hits = hits;
          this.page += 1;
        });
    }
  }

  public get page(): number {
    return this._page;
  }

  public set page(value: number) {
    this._page = value;
  }

  public get options(): string[] {
    return this._options;
  }

  public get hits(): Hit[] {
    return this.newsService.hits;
  }

  /**
   * Function designated to send HTTP request to HN API, 
   * but in this case we use an specific page number.
   */
  public searchByPage(): void {
    if (this.selectedOption != this._options[0]) {
      console.log('Buscando página: ', this._page);
      this.newsService
        .obtainHackerNews(this.selectedOption, this._page)
        .subscribe((response) => {
          // Filter the new hits and then we only obtain the first eight ones
          const hits = response.hits
            .filter(this.newsService.filterData)
            .slice(0, 8);
          // We DON'T touch the previous hits !
          const oldHits = this.newsService.hits;
          this.newsService.hits = oldHits.concat(hits);
        });
      this._page += 1;
    }
  }

  /**
   * Function destinated to search news using our current selectedOption
   * (except when Select your news option it's selected),  
   */
  public searchNews(): void {
    // We store the selected option in our localStorage
    localStorage.setItem('selectedOption', JSON.stringify(this.selectedOption));
    if (this.selectedOption != this._options[0]) {
      // We reset our page counter !
      this._page = 0;
      // We test with the page number 0 by the moment
      this.newsService
        .obtainHackerNews(this.selectedOption, this._page)
        .subscribe((response) => {
          this.newsService.hits = response.hits
            .filter(this.newsService.filterData)
            .slice(0, 8);
          this._page += 1;
        });
    }
  }
}
