import { IntroTiendaPage } from './../pages/intro-tienda/intro-tienda';
import { DetalleProductoPage } from './../pages/detalle-producto/detalle-producto';
import { PerfilPage } from './../pages/perfil/perfil';
import { PrincipalPage } from './../pages/principal/principal';
import { MapaPage } from './../pages/mapa/mapa';
import { SlidesPage } from './../pages/slides/slides';
import { FacturasPage } from './../pages/facturas/facturas';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, LoadingController, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ScanStore } from '../pages/scanstore/scanstore'
import { ContactPage } from '../pages/contact/contact'
import { Storage } from '@ionic/storage';


@Component({
  selector: 'menu-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage;
  pages: Array<{icon: string, title: string, component: any}>;
  pages2: Array<{icon: string, title: string, component: any}>;
  id_tienda;

  constructor(public platform: Platform, private alertCtrl: AlertController, public loadingCtrl: LoadingController, public storage: Storage, public events: Events) {
         //Si es la primera vez que se inicia
         this.storage.get('slide').then((slide) => {
            if(slide == 'visto'){
              this.rootPage=PrincipalPage
            }else{
              this.rootPage=SlidesPage
            }
         });
         
    this.initializeApp();
    // Array de paginas para el menu, con su icono, su titulo, y el enlace.
     this.events.subscribe('tienda:existe', () => {
       this.pages = [
            { icon: "home", title: 'Inicio', component: HomePage },
            { icon: "qr-scanner", title: 'Seleccionar tienda', component: ScanStore },
            { icon: "contact", title: 'Mi pefil', component: PerfilPage },
            { icon: "paper", title: 'Mis facturas', component: FacturasPage }
      ];
     });
     this.events.subscribe('tienda:noexiste', () => {
       this.pages = [
            { icon: "qr-scanner", title: 'Seleccionar tienda', component: ScanStore },
            { icon: "contact", title: 'Mi pefil', component: PerfilPage },
            { icon: "paper", title: 'Mis facturas', component: FacturasPage }
      ];
     });

    
     this.pages2 = [
      { icon: "pin", title: 'Ver tiendas', component: MapaPage },
      { icon: "hammer", title: 'Soporte', component: ContactPage },
      { icon: "help", title: 'Ayuda', component: SlidesPage }
    ];
  }

 ngOnInit(){
      this.events.publish('tienda:noexiste'); //Por defecto la tienda no existe y asi sale el menu sin Inicio
      this.events.publish('slides:novisto'); //Por defecto no se han visto los slides
 }

  CerrarSesion(){
    let alert = this.alertCtrl.create({
    title: 'Cerrar sesión',
    message: '¿Estás seguro de que deseas cerrar tu sesión en Appay?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.MostrarLoading();
        }
      }
    ]
  });
  alert.present();
  }

  MostrarLoading(){
    let loader = this.loadingCtrl.create({
      content: "Cerrando sesión...",
      duration: 3000 //luego lo quitaremos 
    });
    loader.present();
    this.nav.setRoot(PrincipalPage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
    NavegarPerfil() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(PerfilPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
