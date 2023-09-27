import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { CountriesRoutingModule } from './countries-routing.module';

//Component
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';



@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  exports:[
    CountriesRoutingModule,
    SelectorPageComponent
  ]
})
export class CountriesModule { }
