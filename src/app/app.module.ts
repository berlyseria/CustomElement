import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';
import { CustomAccordionContentComponent } from './custom-accordion/custom-accordion-content/custom-accordion-content.component';


@NgModule({
  declarations: [
    CustomAccordionComponent,
    CustomAccordionContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [CustomAccordionComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const accordionEl = createCustomElement(CustomAccordionComponent, {
      injector: this.injector
    });
    customElements.define('custom-accordion', accordionEl);

    const accordionContentEl = createCustomElement(CustomAccordionContentComponent, {
      injector: this.injector
    });
    customElements.define('custom-accordion-content', accordionContentEl);
  }

  ngDoBootstrap() { }
}
