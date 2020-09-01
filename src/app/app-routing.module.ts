import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {MenuComponent} from './menu/menu.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: MainComponent
        },
        {
            path: '',
            outlet: 'menu',
            component: MenuComponent
        }
    ]
},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
