import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { PostInputComponent } from './post-input/post-input.component';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeaderComponent,
    AsyncPipe,
    SvgIconComponent,
    RouterLink,
    ImgUrlPipe,
    PostFeedComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  ProfileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  me$ = toObservable(this.ProfileService.me);
  subscribers$ = this.ProfileService.getSubsribersShortList(5);
  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id == 'me') return this.me$;
      return this.ProfileService.getAccount(id);
    })
  );
}
