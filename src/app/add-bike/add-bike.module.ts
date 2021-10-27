import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddBikeRoutingModule } from './add-bike-routing.module';
import { AddBikeComponent } from './add-bike-main/add-bike.component';

@NgModule({
  imports: [
    CommonModule,
    AddBikeRoutingModule,
    FormsModule,
  ],
  declarations: [AddBikeComponent]
})
export class AddBikeModule { }