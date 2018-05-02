import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ShoppingItem } from '../../model/shopping-item/shopping-item-interface';
import  {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ShoppingListPage } from '../shopping-list/shopping-list';
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  shoppingItem = {} as ShoppingItem;
  shoppingItemRefs$ : AngularFireList<any>
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private database : AngularFireDatabase,
     private toast : ToastController
  ) {
    this.shoppingItemRefs$ = this.database.list('shopping-list');
    

  }

 
  AddShoppingItem(shoppingItem : ShoppingItem){
    let toast = this.toast.create({
      message: 'Adicionado com sucesso',
      duration: 3000
    });
    // create a new anonumous objects and convert iteemnumber to a number
    this.shoppingItemRefs$.push({ 
      itemName: this.shoppingItem.itemName, 
       itemNumber: Number (this.shoppingItem.itemNumber)
    }).then(()=>{
       toast.present();
       this.navCtrl.push(ShoppingListPage);
    },(e)=>{
       console.log("error ásfnasdhfnjkhflkashdkjf"); 
    });

  }
}
