import { Component, Input } from '@angular/core';
import { Hit, MatchLevel } from '../../interfaces/news-response.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [],
})
export class CardComponent {
  @Input() hit!: Hit;
  @Input() index!: number;
  @Input() modeFav!: boolean;

  constructor(private newsService: NewsService) {}

  public redirectToURL(url: any): void {
    if (url != null) window.open(url);
  }

  public addToFavourites(index: number): void {
    // We obtain the i-th hit.
    const hit = this.newsService.hits[index];
    // We add the obtained hit into the favs array
    this.newsService.favs.push(hit);
    localStorage.setItem('favs', JSON.stringify(this.newsService.favs));
  }

  public calculeDifferenceBetweendDates(date: Date): string {
    const _date = new Date(date.toString());
    const now = new Date();
    let difference = Math.floor(
      Math.abs(now.getTime() - _date.getTime()) / 36e5
    );
    return difference.toString();
  }

  /**
   * Function destinad to verify if two Hit objects are equals, in this case we check 4 parameters define if these objects are equals.
   *
   * @param firstHit
   * @param secondHit
   * @returns
   */
  public equals(firstHit: Hit, secondHit: Hit) {
    if (
      firstHit.author === secondHit.author &&
      firstHit.story_title === secondHit.story_title &&
      firstHit.story_url === secondHit.story_url &&
      firstHit.created_at === secondHit.created_at
    ) {
      return true;
    }
    return false;
  }

  public foundHitInFavourites(hit: Hit): boolean {
    // We iterate around our favourites news !
    for (let index = 0; index < this.newsService.favs.length; index++) {
      let fav = this.newsService.favs[index];
      // We verify if the current hit it's equals to our current fav element !
      let hitsEquals = this.equals(fav, hit);
      if (hitsEquals) {
        // If the current hit already exists in favourites, we return true !
        return true;
      }
    }
    // If the current hit not exists in favourites, we return false !
    return false;
  }

  public deleteFromFavourites(hit: Hit) {
    const newFavs = this.newsService
                      .favs.filter((item) => !this.equals(hit, item));
    this.newsService.favs = newFavs;
    localStorage.setItem('favs', JSON.stringify(this.newsService.favs));
  }
}
