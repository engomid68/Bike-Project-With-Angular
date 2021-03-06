import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './main-about/about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }