import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CardElementComponent } from './card-element/card-element.component';

@NgModule({
  declarations: [
    CardElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CardElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(CardElementComponent, {
      injector: this.injector
    });

    // using built in the browser to create your own custome element name
    customElements.define('facebook-card', el);
  }

  ngDoBootstrap() { }
}
