import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { ProfileFormComponent } from '../profile-form/profile-form.component';

@Component({
  selector: 'app-profile-form-page',
  standalone: true,
  imports: [CommonModule, ProfileFormComponent],
  templateUrl: './profile-form-page.component.html',
  styleUrls: ['./profile-form-page.component.scss']
})
export class ProfileFormPageComponent {
 private readonly profileData = inject(ProfileDataService);

 protected readonly data$ = this.profileData
 .getDate()
  .then((value) => value ?? ('undefined' as const));

  protected async save(data: Profile): Promise<void> {
    await this.profileData,setData(data);

  }
}
