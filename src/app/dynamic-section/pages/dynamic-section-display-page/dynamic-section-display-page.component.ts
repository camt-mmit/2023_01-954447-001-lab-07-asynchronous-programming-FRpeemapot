import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDataService } from '../../services/section-data.service';
import { RouterOutlet } from '@angular/router';
import { DynamicSectionDisplayComponent } from '../../dynamic-section-display/dynamic-section-display.component';

@Component({
  selector: 'app-dynamic-section-display-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,DynamicSectionDisplayComponent],
  templateUrl: './dynamic-section-display-page.component.html',
  styleUrls: ['./dynamic-section-display-page.component.scss']
})
export class DynamicSectionDisplayPageComponent {
  private dataService = inject(SectionDataService);

  protected readonly data$ = this.dataService
  .getData()
  .then((value) => value ?? ('undefined' as const));

}
