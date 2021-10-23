import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {

    constructor() {
        
    }

    toggleSlider() {
        let container= document.querySelector('.container');
        // let sliderText = document.querySelectorAll(".accordion");
        let openLeftMenu = document.getElementById("openLeftMenu");
        // let openLeftMenuMobile = document.getElementById("openLeftMenuMobile");

        // sliderText.forEach(sideBarTextName => {
        //     sideBarTextName.classList.toggle("hiddenText");
        // });
        (openLeftMenu as HTMLInputElement).classList.toggle("active");
        (container as HTMLInputElement).classList.toggle('open-menu');
        console.log('container=>',container);
    }

}
