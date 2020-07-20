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
  private _header: string;
  private _opened: boolean = false;

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

  toggleOpen() {
    this.opened = !this.opened;
    this.toggleAccordion.emit(this.opened);
  }

  public set opened(value: boolean) {
    this._opened = value;
  }
  public get opened(): boolean {
    return this._opened;
  }

  constructor(public elementRef: ElementRef) { }

  ngOnInit() { }
}
