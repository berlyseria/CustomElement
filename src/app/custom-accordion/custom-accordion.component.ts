import { Component, ElementRef, Input, Output, ViewEncapsulation, EventEmitter, AfterViewInit, QueryList, Renderer2, ContentChildren, ViewChildren } from '@angular/core';
import { CustomAccordionContentComponent } from './custom-accordion-content/custom-accordion-content.component';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomAccordionComponent implements AfterViewInit {

  private _panelOpenState = false;
  private _open: boolean = false;
  private _multiple: boolean = false;

  private _children: Array<CustomAccordionContentComponent> = new Array<CustomAccordionContentComponent>();

  @ViewChildren(CustomAccordionContentComponent) accordionContent: QueryList<CustomAccordionContentComponent>;

  @Output() isOpen = new EventEmitter<boolean>();

  public set panelOpenState(value) { this._panelOpenState = value; }
  public get panelOpenState() { return this._panelOpenState; }

  public set open(value: boolean) { this._open = value; }
  public get open(): boolean { return this._open; }

  @Input('multiple') set multiple(value: boolean) { this._multiple = value; }
  get multiple(): boolean { return this._multiple; }

  setOpen() {
    this.open = true;
    this.isOpen.emit(this.open);
  }

  setClose() {
    this.open = false;
    this.isOpen.emit(this.open);
  }

  toggle(child: CustomAccordionContentComponent) {
    console.log("Entering custom accordion toggle...");
    // Close panel if clicked the second time
    if (this._children[child.contentId].opened) {
      child.opened = false;
      this.setClose();
    }
    else {
      if (!this.multiple) {
        // Close every panel and show every HR
        this._children.forEach((c) => { c.opened = false; });
      }
      child.opened = true;
      this.setOpen();
    }
  }

  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {
    this.elementRef.nativeElement.setAttribute('remove-padding', '');
    this.renderer2.addClass(elementRef.nativeElement, 'w-100');
  }

  ngAfterViewInit(): void {
    // console.log("ViewChildren", this.accordionContent);
    this._children = this.accordionContent.toArray();
    console.log(this._children);

    for (let index = 0; index < this._children.length; index++) {
      this.renderer2.listen(this._children[index].elementRef.nativeElement, 'click', () => {
        this.toggle(this._children[index]);
      });
    }

    // for (let index = 0; index < this._children.length; index++) {
    //   this.renderer2.listen(this._children[index].elementRef.nativeElement, 'keyup', ($event: KeyboardEvent) => {
    //     $event.preventDefault();
    //     this._children[index].clickFocus = false;
    //     if ($event.keyCode === 32 || $event.keyCode === 13) {
    //       this.toggle(this._children[index]);
    //     }
    //   });
    // }
  }
}
