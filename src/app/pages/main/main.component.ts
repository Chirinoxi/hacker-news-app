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

  constructor(private newsService: NewsService) {
    this.selectedOption = JSON.parse(localStorage.getItem('selectedOption')!) || 'angular';
  }

  ngOnInit(): void {
    this.newsService.obtainHackerNews(this.selectedOption, 0).subscribe(({ hits }) => {
      hits = hits.filter(this.newsService.filterData);
      this.newsService.hits = hits;
    });
  }

  public searchNews() {
    // We store the selected option in our localStorage
    localStorage.setItem('selectedOption', JSON.stringify(this.selectedOption));
    // We test with the page number 0 by the moment
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
