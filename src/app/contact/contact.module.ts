import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './main-contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }