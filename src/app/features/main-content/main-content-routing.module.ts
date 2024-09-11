import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content.component';

const routes: Routes = [
  { path: '', component: MainContentComponent }, // Handles the root route of MainContent
  {
    path: 'first-blog',
    loadComponent: () =>
      import('../../pages/child1/child1.component').then(
        (m) => m.Child1Component
      ),
  }, // Handles the first-blog route of MainContent, // Handles the root route of MainContent
  {
    path: 'second-blog',
    loadComponent: () =>
      import('../../pages/child2/child2.component').then(
        (m) => m.Child2Component
      ),
  }, // Handles the second-blog route of MainContent
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule],
})
export class MainContentRoutingModule {}
