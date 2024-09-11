import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { MainContentRoutingModule } from './main-content-routing.module';
import { HighlightDirective } from '../../directives/highlight.directive';


@NgModule({
  declarations: [MainContentComponent, HighlightDirective],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    MainContentRoutingModule,
  ],
})
export class MainContentModule {}
