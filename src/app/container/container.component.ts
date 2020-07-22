import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewInit {
  private _fullContent: [];

  @Input() set contentlist(value: string) {
    let valParsed = JSON.parse(value);
    this.fullContent = valParsed;
  }

  public set fullContent(value: []) { this._fullContent = value; }
  public get fullContent(): [] { return this._fullContent; }


  constructor() {
  }

  ngAfterViewInit(): void { }
}
