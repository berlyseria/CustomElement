import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-custom-accordion-content',
  templateUrl: './custom-accordion-content.component.html',
  styleUrls: ['./custom-accordion-content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomAccordionContentComponent implements AfterViewInit {

  private _contentId: number;
  private _isopen: boolean = false;

  @Input() set contentId(value: number) {
    this._contentId = value;
  }
  get contentId(): number {
    return this._contentId;
  }

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  toggleOpen() {
    // this.isopen = !this.isopen;
    console.log("from accordion-content", this.isopen);
    this.toggleAccordion.emit(this.isopen);
  }

  @Input() set isopen(value: boolean) { this._isopen = value; }
  get isopen(): boolean { return this._isopen; }

  constructor(public elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.isopen) {
      this.toggleOpen();
    }
  }
}
