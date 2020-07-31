import { Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, ViewChild, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-accordion-content',
  templateUrl: './custom-accordion-content.component.html',
  styleUrls: ['./custom-accordion-content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomAccordionContentComponent implements OnInit {
  private _contentId: number;
  private _header: string;
  private _opened: boolean = false;
  private _clickFocus: boolean = true;
  private _hideHR: boolean = false;

  @Input() isopen: boolean;

  @Input() set contentId(value: number) {
    this._contentId = value;
  }
  get contentId(): number {
    return this._contentId;
  }

  @Input('header') set header(value: string) {
    this._header = value;
  }
  get header(): string {
    return this._header;
  }

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  // Prevent screen from scrolling down
  @HostListener('window:keydown', ['$event']) handleKeyDown(event: KeyboardEvent) { return !(event.keyCode == 32); }

  toggleOpen($event: any) {
    this.opened = !this.opened;
    $event.preventDefault();
    this.toggleAccordion.emit(this.opened);
  }

  keyUp($event: KeyboardEvent) {
    $event.preventDefault();
    if ($event.keyCode === 32 || $event.keyCode === 19) {
      this.toggleAccordion.emit(this.opened);
    }
  }

  public set opened(value: boolean) {
    this._opened = value;
  }
  public get opened(): boolean {
    return this._opened;
  }

  public set clickFocus(value: boolean) {
    this._clickFocus = value;
  }
  public get clickFocus(): boolean {
    return this._clickFocus;
  }

  public set hideHR(value: boolean) {
    this._hideHR = value;
  }
  public get hideHR(): boolean {
    return this._hideHR;
  }

  constructor(public elementRef: ElementRef) { }

  ngOnInit() { }
}
