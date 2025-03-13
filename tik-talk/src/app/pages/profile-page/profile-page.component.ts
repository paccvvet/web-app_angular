import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, AsyncPipe, SvgIconComponent, RouterLink],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  ProfileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  me$ = toObservable(this.ProfileService.me);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id == 'me') return this.me$;
      return this.ProfileService.getAccount(id);
    })
  );
}
