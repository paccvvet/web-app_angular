import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    SvgIconComponent,
    CommonModule,
    SubscriberCardComponent,
    RouterLink,
    ImgUrlPipe,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubsribersShortList();

  me = this.profileService.me;
  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: '',
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chat',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];
  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
