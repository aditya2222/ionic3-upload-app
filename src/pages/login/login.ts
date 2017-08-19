import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usercred } from "../../models/interfaces/usercreds";
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercred;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _authprovider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
signin(){

  this._authprovider.login(this.credentials).then((res:any)=>{

if(!res.code){

  this.navCtrl.setRoot('ProfilepicPage');
}
else
  alert(res);
  })
}

signup(){
this.navCtrl.push('SignupPage');

}
passwordreset(){
this.navCtrl.push('PasswordresetPage');

}
}
