import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScanditSdkModule } from 'scandit-sdk-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';

const licenseKey = 'ASe+9ixMDVqIM5hl7hpsJecbR3I7HWs9AXvm9rpZneYpQ+qpFnlWfCk9EQ4ZarcRrlgG4dUteogcA4C1PESfOWUs7wXLOznvtGPlXFZWOo0bf31Sq1whWlI/CN9Mbf8g20jXKfNjRTppdmPS+zkBYVA0qW5UBSTQZB6kAStCvO1CSzeG5PtANtaoouV9RWa5BAh63plt5ktSCzj5W7ML2bU8Jnb+svgR5+8QH7BquB4k2AC9un/8gMzCPCoqCmFZRMFZveRzZHhoQCh6vyycIkAVMmtcVoBhUdFKlkHVNgcwY0GBKn5Wvx8MsNLC3rCuXF9H/cFs1iaRBIe5If+FtU2PCOBMCsC+D4tNk19dWFI+1dKTIfWH9woITym82tw6fvVTtuSgNDuSa5Boc1LQfBGIaT1WEi4RvB3dKvUsuPCfBcRTTOPgMuzuiwEul/Qa8D0pJw7Mztb8xNPHeIIADhuurADh3X6q0pH/XTE6iM019/vvMj7kh5uDSM23ilHtFBz05R9XcV/HGoQwwzlJ/5QjemMRMEFtXLbkaAVsizzqa91dDjUwox0+JuaxwH5u5H9ph/GJ2ZRVIedZCFznpV9ltX8fKibBgnYVER/P7GWll1X3KWWPxszObNt8TgIEf2FqIxGC6h84sagYvYi83slZiV2tzh7S83jFB2/NcxJM6V44XYQ3bE38qJulavVkqYHl8aDaeAXAHjpLgvXBFRZZ3Ywmuh9UX2RCj1324SQqw2B3xSraRWLlLCl+nnBOcVf61ERWnMRiQUvFNq4TsGdWN3GqNzpsy5UQHMYwuB7oAY26r0ZGXCnv95whHGRMMgyPwWNp0pF2NLd/Dw==';
const engineLocation = 'https://cdn.jsdelivr.net/npm/scandit-sdk@4.x/build';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScanditSdkModule.forRoot(licenseKey, engineLocation),
    FirstModule,
    SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
