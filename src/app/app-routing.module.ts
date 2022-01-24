import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
    {path:"overview", component:OverviewComponent, data:  {title : 'Overview'}},
    {path:"locations", component:LocationComponent,  data : {title : 'Locations'}},
    {path:"", redirectTo:"overview", pathMatch:"full"},
    {path:"**", redirectTo:"overview"}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
