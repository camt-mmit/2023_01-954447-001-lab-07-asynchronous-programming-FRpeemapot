import { Component, DestroyRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormArray,ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { SectionData } from '../model';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dynamic-section-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-section-form.component.html',
  styleUrls: ['./dynamic-section-form.component.scss']
})
export class DynamicSectionFormComponent  implements OnInit {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly destroyRef = inject(DestroyRef); 

  @Input() data?: SectionData;
  @Output() readonly dataChange = new EventEmitter<SectionData>();

  protected  formgroup!: FormGroup<{
    data: FormArray<FormArray<FormControl<number>>>;

  }>;

  ngOnInit(): void {
    this.formgroup = this.fb.group({
      data: this.fb.array(
        (this.data ?? [[0]]).map((arrs) =>
        this.fb.array(arrs.map((value) => this.fb.control(value))),
        ),
      ),
    });

  this.formgroup.valueChanges
  .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(() =>  {
 this.dataChange.emit(this.formgroup.getRawValue().data);
    })
  }

  protected addsection(): void {
    this.formgroup.controls.data.push(this.fb.array([this.fb.control(0)]));
  }

  protected removesection(index: number): void {
    this.formgroup.controls.data.removeAt(index);
  }

  protected addInput(FormArray: FormArray<FormControl<number>>): void {
    FormArray.push(this.fb.control(0));
  }

  protected removeInput(
    formArray: FormArray<FormControl<number>>,
    index: number,
  ): void {
    formArray.removeAt(index)
  }
  
}

