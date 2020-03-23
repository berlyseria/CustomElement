import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardElementComponent {

  title = "Card element";
  count = 0;

  clickMe() {
    this.count++;
    console.log("Click count: " + this.count);
  }
}
