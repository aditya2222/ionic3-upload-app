import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { usercred } from "../../models/interfaces/usercreds";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afuth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  
  }
login(credentials:usercred){
var promise = new Promise((resolve, reject)=>{
this.afuth.auth.signInWithEmailAndPassword(credentials.email,credentials.password).then(()=>{
resolve(true);
}).catch((err)=>{
reject(err);

})


})
return promise;
}
}
