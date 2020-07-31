import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ContentChildren, ViewChild } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterViewInit {

  @ContentChildren(AccordionPanelComponent) _panelContent: QueryList<AccordionPanelComponent>;
  @ViewChild('accordion') _panelChild: AccordionPanelComponent;
  @ViewChildren(AccordionPanelComponent) _panelComponent: QueryList<AccordionPanelComponent>;

  constructor() { }

  ngAfterViewInit() {
    console.log(this._panelContent);
    console.log(this._panelChild);
    console.log(this._panelComponent);
  }

}
