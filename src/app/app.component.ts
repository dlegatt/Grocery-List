import {Component, OnInit} from '@angular/core';
import {GroceryService} from "./grocery.service";
import {GroceryItem} from "./GroceryItem";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  groceryItems: Observable<GroceryItem[]>;
  groceryItem: Observable<GroceryItem>;

  constructor(private svc: GroceryService){}
  ngOnInit(){
    // this.groceryItems = this.svc.getGroceryItems();
    this.groceryItems = this.svc.getGroceryItems().do(
        items => this.select(items[0].id)
    )
  }

  select(id){
    this.groceryItem = this.svc.getGroceryItem(id);
  }
}
