import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the PscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pscan',
  templateUrl: 'pscan.html',
})
export class PscanPage {

  scanText = " ";
  scanFormat="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PscanPage');
  }

  Pscan(){
    
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scanText=barcodeData.text;
      this.scanFormat=barcodeData.format;
     }).catch(err => {
         console.log('Error', err);
     });
  }


  UPpscan(){
    
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scanText=barcodeData.text;
      this.scanFormat=barcodeData.format;
     }).catch(err => {
         console.log('Error', err);
     });
  }



}//END

