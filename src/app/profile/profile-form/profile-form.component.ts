import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
addfriend() {
throw new Error('Method not implemented.');
}
  private readonly destroy: any

  private fb = inject(FormBuilder).nonNullable;

  this.formGroup.valueChanges.pipe(
    )subscribe(() => {
    this.dataChange.emit(this.formGroup)
  })

  protected adfriend(): void {
    this.formGroup.control['firend'].push(this.fb.control(''));
  }

  protected removeFriend(index:number): void {
    this.formGroup.control['friend'].removeAt(index);
  }

  protected moveFriend(index:number, shift:number): void {
    const newIndex = index + shift;

    const control = friends.at(index);
    this.moveFriend.removeAt(index)
    const.insert(newIndex, control);

  }
  

  
}
function subscribe(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function adfriend() {
  throw new Error('Function not implemented.');
}

function removeFriend(index: any, number: any) {
  throw new Error('Function not implemented.');
}

function moveFriend(index: any, number: any, shift: any, number1: any) {
  throw new Error('Function not implemented.');
}

