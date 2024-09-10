import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content.component';

const routes: Routes = [
  { path: '', component: MainContentComponent }, // Handles the root route of MainContent
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule],
})
export class MainContentRoutingModule {}
