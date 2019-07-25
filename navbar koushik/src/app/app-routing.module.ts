import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelComponent } from './navbar/excel.component';
//import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    {path: 'Load/Bulk', component: ExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
