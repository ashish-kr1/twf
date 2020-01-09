import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  warehouse: any = [
    {
      A: 3,
      B: 2,
      C: 8
    },
    {
      D: 12,
      E: 25,
      F: 15
    },
    {
      G: 0.5,
      H: 1,
      I: 2
    }
  ];
  c1 = []; c2 = []; c3 = [];
  order = [{ product: '', weight: 0 }]; cart = [];
  cost = 0; weight = 0; unit = 0;
  constructor() {
  }
  addProduct() {
    this.order.push({ product: '', weight: 0 });
  }
  orderNow() {
    this.c1 = [], this.c2 = [], this.c3 = []; this.weight = 0; this.cost = 0; this.unit = 0; this.cart = []
    for (let i = 0; i < this.order.length; i++) {

      if (this.warehouse[0][this.order[i].product] && this.warehouse[0][this.order[i].product] >= this.order[i].weight) {
        this.warehouse[0][this.order[i].product] - this.order[i].weight;
        this.c1.push(this.order[i]);
        this.weight += this.order[i].weight;
      }
      if (this.warehouse[1][this.order[i].product] && this.warehouse[1][this.order[i].product] >= this.order[i].weight) {
        this.warehouse[1][this.order[i].product] - this.order[i].weight;
        this.c2.push(this.order[i]);
        this.weight += this.order[i].weight;
      }
      if (this.warehouse[2][this.order[i].product] && this.warehouse[2][this.order[i].product] >= this.order[i].weight) {
        this.warehouse[2][this.order[i].product] - this.order[i].weight;
        this.c3.push(this.order[i]);
        this.weight += this.order[i].weight;
      }
    }
    this.costOfproduct();
  }
  costOfproduct() {
    if (this.c1.length) {
      this.cart.push(...this.c1);
      if (this.c2.length) {
        this.unit += 4;
      } else {
        this.unit += 3;
      }
    }
    if (this.c2.length) {
      this.cart.push(...this.c2);
      if (this.c3.length) {
        this.unit += 3;
      } else {
        this.unit += 2.5;
      }
    }
    if (this.c3.length) {
      this.cart.push(...this.c3)
      this.unit += 2;
    }
    if (this.weight > 5) {
      this.cost += 10 * this.unit + (Math.ceil(this.weight / 5) - 1) * 8 * this.unit;
    } else {
      this.cost += 10 * this.unit;
    }
  }

}
