import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-h2',
  templateUrl: './custom-h2.component.html',
  styleUrls: ['./custom-h2.component.css']
})
export class CustomH2Component implements OnInit {

  private _text = '';

  @Input() set text(text: string) { this._text = text; }
  get text(): string { return this._text; }

  constructor() { }

  ngOnInit() { }
}
