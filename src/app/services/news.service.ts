import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hit, NewsResponse } from '../interfaces/news-response.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl: string = 'https://hn.algolia.com/api/v1';
  private _hits: Hit[] = [];
  private _favs: Hit[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Public get to retrieve _hits variable.
   */
  public get hits(): Hit[] {
    return this._hits;
  }

  /**
   * Public set to change _hits variable value.
   */
  public set hits(value: Hit[]) {
    this._hits = value;
  }

  /**
   * Public get to retrieve _favs variable.
   */
  public get favs(): Hit[] {
    return this._favs;
  }

  /**
   * Public set to change _favs variable value.
   */
  public set favs(value: Hit[]) {
    this._favs = value;
  }

  /**
   * This function add some parameter to our baseUrl.
   * 
   * @param url: URL object. In this case corresponds to the HN API url.
   * @param key: name of the added parameter.
   * @param value: value of the added parameter.
   * @returns: URL
   */
  public addParameterToUrl(url: URL, key: string, value: string): URL {
    let _url = url;
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    _url.searchParams.append(key, value);
    return _url;
  }

  /**
   * Function designated to verify if a Hit object is appropiated.
   * 
   * @param hit: Hit object.
   * @returns: boolean.
   */
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

  /**
   * Function designated to send HTTP Request to HN Api
   * 
   * @param query: string query.
   * @param page: page number.
   * @returns: Observable<NewsResponse>
   */
  public obtainHackerNews(
    query: string,
    page: number
  ): Observable<NewsResponse> {
    let url = new URL(this.baseUrl + '/search_by_date?');
    url = this.addParameterToUrl(url, 'query', query);
    url = this.addParameterToUrl(url, 'page', page.toString());
    // We apply a constraint for retrieve only 6 elements in a response !
    return this.http.get<NewsResponse>(url.toString());
  }
}
