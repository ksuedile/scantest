import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstComponent } from './first.component';
import { ScanditSdkModule } from 'scandit-sdk-angular';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BrowserModule, ScanditSdkModule
  ],
  providers: [],
  exports: [
    FirstComponent
  ],
  bootstrap: [FirstComponent]
})
export class FirstModule { }
