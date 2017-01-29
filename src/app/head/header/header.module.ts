// Angular Imports
import { NgModule } from '@angular/core';

import {DashboardComponent} from '../dashboard/dashboard.component'
// This Module's Components
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [
        DashboardComponent
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

}
