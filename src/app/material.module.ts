import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatMenuModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
