import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hit, NewsResponse } from '../interfaces/news-response.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl: string = 'http://hn.algolia.com/api/v1';
  private _hits: Hit[] = [];
  private _favs: Hit[] = [];

  constructor(private http: HttpClient) {}

  public get hits(): Hit[] {
    return this._hits;
  }

  public set hits(value: Hit[]) {
    this._hits = value;
  }

  public get favs(): Hit[] {
    return this._favs;
  }

  public set favs(value: Hit[]) {
    this._favs = value;
  }

  public addParameterToUrl(url: URL, key: string, value: string): URL {
    let _url = url;
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    _url.searchParams.append(key, value);
    return _url;
  }

  public filterData(hit: Hit): boolean {
    if (
      hit.author != null &&
      hit.story_title != null &&
      hit.story_url != null &&
      hit.created_at != null
    ) {
      return true;
    }
    return false;
  }

  public obtainHackerNews(
    query: string,
    page: number
  ): Observable<NewsResponse> {
    let url = new URL(this.baseUrl + '/search_by_date?');
    url = this.addParameterToUrl(url, 'query', query);
    url = this.addParameterToUrl(url, 'page', page.toString());
    url = this.addParameterToUrl(url, 'hitsPerPage', '6');
    return this.http.get<NewsResponse>(url.toString());
  }
}
