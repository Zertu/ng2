// Angular Imports
import { NgModule } from '@angular/core';

import { DashboardComponent } from '../dashboard/dashboard.component'
// This Module's Components
import { HeaderComponent } from './header.component';
import { pipesearch } from '../../pipe/search.pipe'
@NgModule({
    imports: [
        DashboardComponent,
        pipesearch
    ],
    declarations: [
        HeaderComponent,
        pipesearch
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

}
