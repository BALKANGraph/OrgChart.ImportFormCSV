import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OrgChartJsComponent } from './org-chart-js/org-chart-js.component';

const routes: Routes = [
  {
    path: 'org-chart-js',
    component: OrgChartJsComponent
  },
  {
    path: '**',
    redirectTo: 'org-chart-js'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
