import { ScanStore } from './../scanstore/scanstore';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})


export class SlidesPage {
  
  constructor(
    public navCtrl: NavController) {}

  slides = [
    
    {
      title: "Bienvenido a Appay!",
      description: "Appay es una <b>plataforma de pago</b> que te permite simplificar el proceso de compra en una tienda fisica durante el ShowRoom.",
      image: "assets/img/BienvenidoAppay.png",
    },

    {
      title: "Date de alta",
      description: "Puedes <b>Logueate</b> de la forma que prefieras, mediante tu correo electronico, facebook o completando nuestro formulario de registro.",
      image: "assets/img/Login.png",
    },

    {
      
      title: "Escanear Cod QR de la tienda",
      description: "Al escanear el <b>Código QR</b> tu terminal reconoce la tienda en la que te encuentras y cargara toda la información necesaria para que puedas comprar.",
      image: "assets/img/EscaneandoQR.png",
    },

    {
      title: "Escanear Cod barras",
      description: "El <b>Código de Barras</b> te mostrara información relevante al producto, para tener más información y poder añadirlo a tu carrito de compra.",
      image: "assets/img/EnscaneandoCodBarras.png",
    },

    {
      title: "Realizar Compra",
      description: "En tu <b>Carrito</b> una vez tengas todos los productos que deseas comprar añadidos, pulsa sobre el boton pagar y realiza el pago.",
      image: "assets/img/Pagar.png",
    }

   

  ];

  next() {
      this.navCtrl.setRoot(ScanStore);
    }
}


