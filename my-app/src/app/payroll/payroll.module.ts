import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from '../first-comp/first-comp.component';
import { SecondCompComponent } from '../second-comp/second-comp.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [FirstCompComponent, SecondCompComponent],
  imports: [
    CommonModule
    ,BrowserModule
  ],
  bootstrap:[FirstCompComponent]
 
})
export class PayrollModule { }
