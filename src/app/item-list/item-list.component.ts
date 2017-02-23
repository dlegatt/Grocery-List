import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import {GroceryItem} from "../GroceryItem";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  @Input() items: Array<GroceryItem>;
  @Output() onSelect = new EventEmitter<number>();
  selectedId: number;

  constructor() { }

  ngOnInit() {
    this.select(this.items[0].id);
  }

  select(id: number){
    this.onSelect.emit(id);
    this.selectedId = id;
  }
}
