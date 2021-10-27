import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/main-home/home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

// import { RightMenuComponent } from './right-menu/right-menu.component';
// import { PostContentComponent } from './right-menu/post-content/post-content.component';

import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientService } from './service/httpClient.service';
import { SliderService } from './slider/slider.service';
import { StoreService } from './service/store.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginService } from './login/login.service';
import { RightMenuModule } from './right-menu/right-menu.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    AddBikeComponent,
    FooterComponent,
    LoginComponent,

    // RightMenuComponent,
    // PostContentComponent,
    
    ContentWrapperComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RightMenuModule
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
