import { Component, Input, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements AfterViewInit {

  private _header: string;
  private _panelOpenState: boolean = false;

  @ViewChildren('panel') _panel;

  @Input() set header(value: string) { this._header = value; }
  get header(): string { return this._header; }

  set panelOpenState(value: boolean) { this._panelOpenState = value; }
  get panelOpenState(): boolean { return this._panelOpenState; }

  setOpen() { this.panelOpenState = true; }
  setClose() { this.panelOpenState = false; }

  togglePanel() {
    this.panelOpenState ? this.setClose() : this.setOpen();
    console.log(this.header, "is", this.panelOpenState);
  }

  constructor() { }

  ngAfterViewInit() {
    console.log("panel called...", this._panel);
  }

}
