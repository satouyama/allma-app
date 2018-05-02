import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { usuario } from '../../model/usuario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    public user : usuario = <usuario>{};


   
  constructor(public navCtrl: NavController, 
    public toastCtrl : ToastController,
    public _http : HttpClient
  ) {
       
  }

  Logar(){


  }


  

}