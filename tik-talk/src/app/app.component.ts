import { ProfileService } from './data/services/profile.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tik-talk';
  ProfileService = inject(ProfileService);
  profiles: Profile[] = [];
  constructor() {
    this.ProfileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }
}
