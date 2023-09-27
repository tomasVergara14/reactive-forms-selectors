import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: '', component: SelectorPageComponent },
      { path: '**', redirectTo: '' },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports:[ RouterModule ],
})
export class CountriesRoutingModule { }
