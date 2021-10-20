import { Component, OnInit } from '@angular/core';
import { SliderService } from '../slider/slider.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private sliderService: SliderService
  ) { 

  }

  // var let const
  toggleSlider(event: any) {
    this.sliderService.toggleSlider();
  }

  ngOnInit(): void {

  }

}
