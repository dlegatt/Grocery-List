import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UrlSegmentGroup} from "@angular/router";
import {GroceryItem} from "./GroceryItem";
import { GROCERY_ITEMS} from './GroceryItems.data';

@Injectable()
export class GroceryService {
  groceryItemsObservable: Observable<GroceryItem[]>;
  groceryItems: Array<GroceryItem>;

  constructor() { }

  getGroceryItems(): Observable<GroceryItem[]>{
    if (this.groceryItems) {
      return Observable.of(this.groceryItems);
    } else if (this.groceryItemsObservable) {
      return this.groceryItemsObservable;
    } else {
      return this.fetchGroceryItems();
    }
  }

  getGroceryItem(id): Observable<GroceryItem>{
    return this.getGroceryItems().map(
      res => res.find(i => i.id == id)
    );
  }

  private fetchGroceryItems(){
    let groceryItems = GROCERY_ITEMS;
    this.groceryItemsObservable =
        Observable.create(observer => observer.next(groceryItems))
        .map(groceryItems => groceryItems)
        .do(groceryItems => {
            this.groceryItems = groceryItems;
            this.groceryItemsObservable = null;
        })
        ;
    return this.groceryItemsObservable;
  }
}
