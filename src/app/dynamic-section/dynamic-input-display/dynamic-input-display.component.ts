import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputData } from '../model';

@Component({
  selector: 'app-dynamic-input-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input-display.component.html',
  styleUrls: ['./dynamic-input-display.component.scss']
})
export class DynamicInputDisplayComponent {
  @Input() data?: InputData;

}
