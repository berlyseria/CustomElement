import { Component, ElementRef, Input, Output, ViewEncapsulation, EventEmitter, AfterViewInit, QueryList, Renderer2, ContentChildren, ViewChildren } from '@angular/core';
import { CustomAccordionContentComponent } from './custom-accordion-content/custom-accordion-content.component';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomAccordionComponent implements AfterViewInit {

  private _header: string;
  // private _contents: object;
  private _panelOpenState = false;
  private _panelId: number;
  private _multiple: boolean = false;

  private _children: Array<CustomAccordionContentComponent> = new Array<CustomAccordionContentComponent>();

  @ViewChildren(CustomAccordionContentComponent) accordionContent: QueryList<CustomAccordionContentComponent>;

  @Input() set panelId(value: number) { this._panelId = value; }
  get panelId(): number { return this._panelId; }

  // @Input() set contents(value: object) {
  //   console.log(value);
  //   // this._contents = value;

  //   this.header = value['header'];
  // }

  // get contents(): object { return this._contents; }

  @Input() set header(value: string) { this._header = value; }
  get header(): string { return this._header; }

  set panelOpenState(value) { this._panelOpenState = value; }
  get panelOpenState() { return this._panelOpenState; }


  @Input('multiple') set multiple(value: boolean) { this._multiple = value; }
  get multiple(): boolean { return this._multiple; }

  setOpen() {
    this.panelOpenState = true;
  }

  setClose() {
    this.panelOpenState = false;
  }

  togglePanel() {
    console.log("toggle panel clicked.");
    this.panelOpenState ? this.setClose() : this.setOpen();
  }

  toggle(child: CustomAccordionContentComponent) {
    console.log("Entering custom accordion toggle...");
    // Close panel if clicked the second time
    if (this._children[child.contentId].isopen) {
      child.isopen = false;
      this.setClose();
    }
    else {
      if (!this.multiple) {
        // Close every panel and show every HR
        this._children.forEach((c) => { c.isopen = false; });
      }
      child.isopen = true;
      this.setOpen();
    }
  }

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {
    this.elementRef.nativeElement.setAttribute('remove-padding', '');
    this.renderer2.addClass(elementRef.nativeElement, 'w-100');
  }

  ngAfterViewInit(): void {
    // console.log(this.accordionContent);
    // this._children = this.accordionContent.toArray();

    // for (let index = 0; index < this._children.length; index++) {
    //   this.renderer2.listen(this._children[index].elementRef.nativeElement, 'click', () => {
    //     console.log(this._children[index]);
    //     this.toggle(this._children[index]);
    //   });
    // }
  }
}
