import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent }, // Home route
  {
    path: 'main-content',
    loadChildren: () =>
      import('./features/main-content/main-content.module').then(
        (m) => m.MainContentModule
      ),
  }, // Lazy-loaded main-content route
  // { path: '**', redirectTo: 'home' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
