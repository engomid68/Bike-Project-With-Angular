import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { RightMenuModule } from './right-menu/right-menu.module';
import { AddBikeModule } from './add-bike/add-bike.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';

import { HttpClientService } from './service/httpClient.service';
import { SliderService } from './slider/slider.service';
import { StoreService } from './service/store.service';
import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
// import { AboutComponent } from './about/main-about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    LoginComponent,
    ContentWrapperComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RightMenuModule,
    HomeModule,
    AddBikeModule,
    ContactModule,
    AboutModule
  ],
  providers: [
    HttpClientService,
    SliderService,
    StoreService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
