import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientService } from './service/httpClient.service';
import { HttpClientModule } from '@angular/common/http';
import { SliderService } from './slider/slider.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    AddBikeComponent,
    FooterComponent,
    LoginComponent,
    RightMenuComponent,
    ContentWrapperComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService,
    SliderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
