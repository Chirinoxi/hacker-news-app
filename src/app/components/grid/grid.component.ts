import { Component, OnInit, Input } from '@angular/core';
import { Hit } from 'src/app/interfaces/news-response.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() hits!:Hit[];

  constructor() { }

  ngOnInit(): void {
  }

}
