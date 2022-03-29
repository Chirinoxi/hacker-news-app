import { Component, Input } from '@angular/core';
import { Hit } from '../../interfaces/news-response.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() hit!: Hit;
  constructor() {}

  public redirectToURL(url: any){
    if(url != null) window.open(url);
  }
}
