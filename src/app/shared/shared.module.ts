import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent
  ]
})
export class SharedModule { }
