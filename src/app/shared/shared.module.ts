import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from '../components/card/card.component';
import { AppRouterModule } from '../app-router/app-router.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppRouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
