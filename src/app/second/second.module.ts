import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SecondComponent } from './second.component';
import { ScanditSdkModule } from 'scandit-sdk-angular';


@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    BrowserModule, ScanditSdkModule
  ],
  providers: [],
  exports: [
    SecondComponent
  ],
  bootstrap: [SecondComponent]
})
export class SecondModule { }
