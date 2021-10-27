import { NgModule } from "@angular/core";

import { RightMenuComponent } from "./right-menu.component";
import { PostContentComponent } from "./post-content/post-content.component";
import { RightMenuRoutingModule } from "./right-menu-routing.module";

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