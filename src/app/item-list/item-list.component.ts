import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import {GroceryItem} from "../GroceryItem";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  private _items = new BehaviorSubject<GroceryItem[]>([]);
  @Output() onSelect = new EventEmitter<number>();
  selectedId: number;

  constructor() { }

  ngOnInit() {
    this._items.subscribe();
  }

  select(id: number){
    this.onSelect.emit(id);
    this.selectedId = id;
  }

  @Input()
  set items(value) {
    this._items.next(value);
    if (value !== null) {
      this.select(value[0].id)
    }
  }

  get items() {
    return this._items.getValue();
  }
}
