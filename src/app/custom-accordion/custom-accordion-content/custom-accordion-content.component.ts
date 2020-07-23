import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  AfterViewInit,
  ViewChildren,
  ViewChild
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

  @Input() set contentId(value: number) { this._contentId = value; }
  get contentId(): number { return this._contentId; }

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('accordion') _accordionEl: ElementRef;

  toggleOpen() {
    this.isopen = !this.isopen;
    console.log("from accordion-content", this.isopen);
    console.log(this._accordionEl.nativeElement);
    this._accordionEl.nativeElement.classList.toggle("active");

    this.toggleAccordion.emit(this.isopen);
  }

  @Input() set isopen(value: boolean) { this._isopen = value; }
  get isopen(): boolean { return this._isopen; }

  constructor(public elementRef: ElementRef) { }

  ngAfterViewInit(): void { }
}
