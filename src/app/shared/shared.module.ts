import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRouterModule } from '../app-router/app-router.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, AppRouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
