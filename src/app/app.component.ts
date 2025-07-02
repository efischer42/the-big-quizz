import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'TheBigQuizz';

  constructor(private readonly _apiService: ApiService) {}

  public ngOnInit(): void {
    this._apiService.getRoot().subscribe({
      next: (data) => {
        console.log('API is up and running:', data);
      },
      error: (error) => {
        console.error('Error connecting to API:', error);
      },
    });
  }
}
