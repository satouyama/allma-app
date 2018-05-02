import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase , AngularFireList  } from 'angularfire2/database';
import { ShoppingItem } from '../../model/shopping-item/shopping-item-interface';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
 
   shoppingListRefs$ : Observable<ShoppingItem[]>
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database : AngularFireDatabase, public loadingCtrl : LoadingController
  ) {
  
    
    let load = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Carregando lista aguarde ...'
     })
     load.present();
     this.shoppingListRefs$ = this.database.list('shopping-list').valueChanges()
     load.dismiss();
    
  }
 
      

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }
    
}
