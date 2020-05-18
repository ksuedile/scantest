import { Component } from '@angular/core';
import { Barcode, ScanSettings } from 'scandit-sdk';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  public title = 'second component';
  public settings = new ScanSettings({
    enabledSymbologies: [
      Barcode.Symbology.EAN8,
      Barcode.Symbology.EAN13,
      Barcode.Symbology.UPCA,
      Barcode.Symbology.UPCE,
      Barcode.Symbology.CODE128,
      Barcode.Symbology.CODE39,
      Barcode.Symbology.CODE93,
      Barcode.Symbology.INTERLEAVED_2_OF_5,
      Barcode.Symbology.MAXICODE
    ],
    codeDuplicateFilter: 1000,
  });


  public onScan() {
    alert('second: scan');
  }
  public onError() {
    alert('second: error');
  }
}
