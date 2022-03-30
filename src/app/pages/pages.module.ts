import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavsComponent } from './favs/favs.component';
import { AppRouterModule } from '../app-router/app-router.module';

@NgModule({
  declarations: [MainComponent, FavsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [MainComponent],
})
export class PagesModule {}
