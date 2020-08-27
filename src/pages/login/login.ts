import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logindata: any= {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http , public alertCrtl:AlertController) {
    this.logindata.username="";
    this.logindata.password="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){
    if(this.logindata.username !="" && this.logindata.password!=""){

    console.log("user:",this.logindata.username);
    console.log("pass:",this.logindata.password);

      let url : string = "http://127.0.0.1/APP/PR_PHP/login.php";
      let datapost = JSON.stringify({
        user:this.logindata.username,
        pass:this.logindata.password

      });
      this.http.post(url,datapost)
      .map(res=>res.json())
      .subscribe(data =>{
        if(data!=null){
          this.navCtrl.setRoot(HomePage);
        }else{
          console.log("เข้าสู่ระบบผิดพลาด")
          this.alertPopup("แจ้งเตือน!!","ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
        }
    });
  }else{
    console.log("Enter Password");
  }
}

alertPopup(title:string,Msg:string){
  let alert = this.alertCrtl.create({
      title : title,
      subTitle : Msg,
      buttons : ['OK']  
  }); 
  
  alert.present();
}

}//END
