import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-p',
  templateUrl: './custom-p.component.html',
  styleUrls: ['./custom-p.component.css']
})
export class CustomPComponent implements OnInit {
  private _text = '';

  @Input() set text(text: string) { this._text = text; }
  get text(): string { return this._text; }

  constructor() { }

  ngOnInit() { }
}
