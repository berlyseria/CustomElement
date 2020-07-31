import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-accordion-panel-header',
  templateUrl: './accordion-panel-header.component.html',
  styleUrls: ['./accordion-panel-header.component.css']
})
export class AccordionPanelHeaderComponent implements AfterViewInit {

  private _header: string;

  @Input() set header(value: string) { this._header = value; }
  get header(): string { return this._header; }

  constructor() { }

  ngAfterViewInit() { }

}
