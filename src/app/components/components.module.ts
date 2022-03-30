import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CardComponent, GridComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CardComponent, GridComponent],
})
export class ComponentsModule {}
