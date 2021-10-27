import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBikeComponent } from './add-bike-main/add-bike.component';


const routes: Routes = [
  {
    path: '',
    component: AddBikeComponent
  },
  {
    path: 'add-bike/:id',
    component: AddBikeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBikeRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/