import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './about/main-about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import(`./home/home.module`)
      .then(m => m.HomeModule) 
  },
  {
    path: 'add-bike', 
    loadChildren: () => import(`./add-bike/add-bike.module`)
      .then(m => m.AddBikeModule) 
  },
  {
    path: 'add-bike/:id', 
    loadChildren: () => import(`./add-bike/add-bike.module`)
      .then(m => m.AddBikeModule) 
  },
  {
    path: 'contact', 
    loadChildren: () => import(`./contact/contact.module`)
      .then(m => m.ContactModule) 
  },
  {
    path: 'about', 
    loadChildren: () => import(`./about/about.module`)
      .then(m => m.AboutModule) 
  },
  // { path: 'about', component: AboutComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
