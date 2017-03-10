import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-acceder',
  templateUrl: 'acceder.html'
})
export class AccederPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccederPage');
  }

  login(){
    let loader = this.loadingCtrl.create({
      content: "Iniciando sesión...",
      duration: 3000 //luego lo quitaremos 
    });
    loader.present();
   // loader.dismiss();// metodo para quitarlo

/*
  let alert = this.alertCtrl.create({
    title: 'Login Fallido',
    subTitle: 'Asegúrate de haber puesto tus datos de acceso correctamente.',
    buttons: ['Aceptar']
  });
  alert.present();
*/
  }

  MostrarRecuperar() {
    let prompt = this.alertCtrl.create({
      title: 'Recuperar contraseña',
      message: "Introduzca su correo electrónico para recupera su contraseña y compruebe su correo electrónico",
      inputs: [
        {
          name: 'correo',
          placeholder: 'Correo electrónico'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar correo',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
 