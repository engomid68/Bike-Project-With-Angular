import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RightMenuComponent } from './right-menu-main/right-menu.component';

const routes: Routes = [
  { path: '', component: RightMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RightMenuRoutingModule { }
