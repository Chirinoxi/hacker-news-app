import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, FormsModule, ComponentsModule, SharedModule],
  exports: [MainComponent],
})
export class PagesModule {}
