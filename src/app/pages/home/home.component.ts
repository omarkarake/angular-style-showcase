import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLoading$ = this.loaderService.loading$; // Observable for loader state
  parentSubscription: Subscription = new Subscription(); // Initialize subscription

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe(); // Clean up subscriptions
  }

  // Optional: Method to handle button click and trigger loader
  goToRecipes(): void {
    this.loaderService.show(); // Show loader if navigation triggers a load operation
    // Simulate some operation with setTimeout (replace with real logic if needed)
    setTimeout(() => this.loaderService.hide(), 1000); // Hide loader after operation
  }
}
