import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  ProfileService = inject(ProfileService);
  ngOnInit() {
    this.ProfileService.getMe().subscribe((val) => {
      console.log(val);
    });
  }
}
