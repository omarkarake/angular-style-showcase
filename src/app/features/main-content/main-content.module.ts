import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from '../../pages/child1/child1.component';
import { Child2Component } from '../../pages/child2/child2.component';
import { MainContentRoutingModule } from './main-content-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'main-content', pathMatch: 'full' },
  { path: 'main-content', component: MainContentComponent },
];

@NgModule({
  declarations: [MainContentComponent, Child1Component, Child2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainContentRoutingModule,
  ],
})
export class MainContentModule {}
