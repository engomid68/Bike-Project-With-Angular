import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // window.onload = function (e) {
    //   let openLeftMenu = document.getElementById("openLeftMenu");
    //   let openLeftMenuMobile = document.getElementById("openLeftMenuMobile");
    //   const sideBarText = document.querySelectorAll(".slider-text");
    //   const container = document.querySelector(".container");
    //   const overlay = document.querySelector(".overlay");
    //   const extraHeaderMobile = document.querySelector(".header-extra-menu");
    //   let width = window.getComputedStyle(container).getPropertyValue('width');
    //   const mobileNavBar = document.querySelector('.mobile-navbar');
    //   const contentSearchButton = document.querySelector('.content-search-button');


    //   if (width > 990 && container.classList.contains('open-menu')) {// For getting container width and delete margin-Left (sidebarMenu)
    //     container.classList.remove('open-menu');
    //   }


    //   openLeftMenu.addEventListener('click', funcCloseAndOpenLeftMenu);
    //   openLeftMenuMobile.addEventListener('click', funcOpenLeftMenuMobile);
    //   overlay.addEventListener('click', funcCloseLeftMenuMobile);

    //   function funcCloseAndOpenLeftMenu() {
    //     container.classList.toggle("open-menu");
    //     sliderText.forEach(sliderText => {
    //       sliderText.classList.toggle("hiddenText");
    //     });
    //     openLeftMenu.classList.toggle("active");
    //   }

    //   function funcOpenLeftMenuMobile() {
    //     container.classList.add("leftMenuInMobile");
    //     overlay.classList.add("active");
    //   }

    //   function funcCloseLeftMenuMobile() {
    //     container.classList.remove("leftMenuInMobile");
    //     overlay.classList.remove("active");
    //   }

      //**************************************  End Open Left Menu **********************************/ 

      //***************************************  Open Sub(Accordion) Menu On The SideBar **********************************/
      // let accordionMenu = document.getElementsByClassName("item-");
      // let i;

      // for (i = 0; i < accordionMenu.length; i++) {
      //   accordionMenu[i].addEventListener("click", function () {
      //     for (let i = 0; i < accordionMenu.length; i++) {
      //       accordionMenu[i].classList.remove('active');
      //       accordionMenu[i].style.maxHeight = null;
      //       accordionMenu[i].nextElementSibling.style.maxHeight = null;
      //     }
      //     this.style.maxHeight = this.scrollHeight + 'px';
      //     this.classList.add('active');
      //     var panel = this.nextElementSibling;
      //     panel.style.maxHeight = panel.scrollHeight + 'px'

      //   });
      // }


      //***************************************  End Open Sub Menu On The SideBar **********************************/
    // }
  }

}
