import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatMenuModule,
  ],
  exports: [
    MatInputModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
