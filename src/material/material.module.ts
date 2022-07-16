import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  exports:[MatDatepickerModule,MatFormFieldModule],
  declarations: [MaterialComponent,]
})
export class MaterialModule { }
