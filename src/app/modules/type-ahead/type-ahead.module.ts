import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeAheadComponent } from './type-ahead.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TypeAheadComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TypeAheadComponent]
})
export class TypeAheadModule { }
