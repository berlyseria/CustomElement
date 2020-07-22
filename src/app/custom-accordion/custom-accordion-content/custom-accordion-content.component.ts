import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-custom-accordion-content',
  templateUrl: './custom-accordion-content.component.html',
  styleUrls: ['./custom-accordion-content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomAccordionContentComponent implements OnInit {
  private _contentId: number;
  // private _header: string;
  private _isopen: boolean = false;

  @Input() set contentId(value: number) {
    this._contentId = value;
  }
  get contentId(): number {
    return this._contentId;
  }

  // @Input('header') set header(value: string) {
  //   this._header = value;
  // }
  // get header(): string {
  //   return this._header;
  // }

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  toggleOpen() {
    this.isopen = !this.isopen;
    this.toggleAccordion.emit(this.isopen);
  }

  @Input() set isopen(value: boolean) { this._isopen = value; }
  get isopen(): boolean { return this._isopen; }

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    console.log("Open:", this.isopen);
  }
}
