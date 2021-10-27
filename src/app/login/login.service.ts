import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    constructor() {

    }
    
    popupLogin() {
        let popupLogin = document.querySelector('.popup-login');
        (popupLogin as HTMLInputElement).classList.add("active");
    }

}
