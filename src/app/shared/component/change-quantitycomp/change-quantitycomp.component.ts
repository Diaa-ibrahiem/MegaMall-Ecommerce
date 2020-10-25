import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-quantitycomp',
  templateUrl: './change-quantitycomp.component.html',
  styleUrls: ['./change-quantitycomp.component.css'],
})
export class ChangeQuantitycompComponent implements OnInit {
  @Input() Quantity: number;
  @Output() QuantityChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  Plus() {
    this.Quantity++;
    this.QuantityChange.emit(this.Quantity);
  }
  Minus() {
    if (this.Quantity > 1) {
      this.Quantity--;
      this.QuantityChange.emit(this.Quantity);
    } else {
      return null;
    }
  }
}
