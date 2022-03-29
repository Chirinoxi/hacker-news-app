import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [CardComponent, GridComponent],
  imports: [CommonModule],
  exports: [CardComponent, GridComponent],
})
export class ComponentsModule {}
