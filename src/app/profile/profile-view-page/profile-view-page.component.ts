import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from "../profile-view/profile-view.component";

@Component({
    selector: 'app-profile-view-page',
    standalone: true,
    templateUrl: './profile-view-page.component.html',
    styleUrls: ['./profile-view-page.component.scss'],
    imports: [CommonModule, ProfileViewPageComponent, ProfileViewComponent]
})
export class ProfileViewPageComponent {

    private readonly profileData = inject()

    protected readonly data$ = this.profileData
    .getDatae()
    .then((value) => value ?? 'undefined');
}
