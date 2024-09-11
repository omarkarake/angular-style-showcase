import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentRoutingModule } from './main-content-routing.module';
import { HighlightDirective } from '../../directives/highlight.directive';

const routes: Routes = [
  { path: '', redirectTo: 'main-content', pathMatch: 'full' },
  { path: 'main-content', component: MainContentComponent },
];

@NgModule({
  declarations: [MainContentComponent, HighlightDirective],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    MainContentRoutingModule,
  ],
})
export class MainContentModule {}
