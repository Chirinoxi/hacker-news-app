import { Component, Input, OnInit } from '@angular/core';
import { Hit } from '../../interfaces/news-response.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() hit!: Hit;

  constructor() { }

  ngOnInit(): void {
  }

}
