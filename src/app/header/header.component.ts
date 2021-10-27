import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SliderService } from '../slider/slider.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private sliderService: SliderService,
    private loginService: LoginService
  ) { 

  }

  // var let const
  toggleSlider() {
    this.sliderService.toggleSlider();
  }

  popupLogin() {
    this.loginService.popupLogin();
  }

  ngOnInit(): void {

  }

}
