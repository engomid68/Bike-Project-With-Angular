import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {

    constructor() {
        
    }

    toggleSlider() {
        let container= document.querySelector('.container');
        let sliderText = document.querySelectorAll(".slider-text");
        let openLeftMenu = document.getElementById("openLeftMenu");
        // let openLeftMenuMobile = document.getElementById("openLeftMenuMobile");

        sliderText.forEach(sideBarTextName => {
            sideBarTextName.classList.toggle("hiddenText");
        });
        openLeftMenu!.classList.toggle("active");
        container!.classList.toggle('open-menu');
        console.log('container=>',container);
    }

}
