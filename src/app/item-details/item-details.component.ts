import {Component, OnInit, Input} from '@angular/core';
import {GroceryItem} from "../GroceryItem";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  private _item = new BehaviorSubject<GroceryItem>(null);
  groceryItem: GroceryItem;
  constructor() { }

  ngOnInit() {
    this._item.subscribe(item => this.groceryItem = this.item)
  }

  @Input()
  set item(value: GroceryItem){
    this._item.next(value);
  }

  get item(){
    return this._item.getValue();
  }
}
