import { NgModule } from "@angular/core";

import { PostContentComponent } from "./post-content/post-content.component";
import { RightMenuComponent } from "./right-menu-main/right-menu.component";

@NgModule({
    declarations: [
        RightMenuComponent,
        PostContentComponent
    ],
    imports: [
        // RightMenuRoutingModule
    ],
    providers: [],
    bootstrap: [
        
    ],
    exports: [
        RightMenuComponent
    ]
})
export class RightMenuModule { }