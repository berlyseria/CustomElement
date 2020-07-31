import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';
import { CustomAccordionContentComponent } from './custom-accordion/custom-accordion-content/custom-accordion-content.component';
import { ContainerComponent } from './container/container.component';
import { CustomPComponent } from './custom-p/custom-p.component';
import { CustomH2Component } from './custom-h2/custom-h2.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionPanelHeaderComponent } from './accordion-panel-header/accordion-panel-header.component';


@NgModule({
  declarations: [
    CustomAccordionComponent,
    CustomAccordionContentComponent,
    ContainerComponent,
    CustomPComponent,
    CustomH2Component,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [CustomAccordionComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const customPEl = createCustomElement(CustomPComponent, {
      injector: this.injector
    });
    customElements.define('custom-p', customPEl);

    const customH2 = createCustomElement(CustomH2Component, {
      injector: this.injector
    });
    customElements.define('custom-h2', customH2);

    const customContainerEl = createCustomElement(ContainerComponent, {
      injector: this.injector
    });
    customElements.define('custom-container', customContainerEl);

    const customAccordionEl = createCustomElement(CustomAccordionComponent, {
      injector: this.injector
    });
    customElements.define('custom-accordion', customAccordionEl);

    const customAccordionContentEl = createCustomElement(CustomAccordionContentComponent, {
      injector: this.injector
    });
    customElements.define('custom-accordion-content', customAccordionContentEl);

    const accordionEl = createCustomElement(AccordionComponent, {
      injector: this.injector
    });
    customElements.define('accordion-main', accordionEl);

    const accordionPanelEl = createCustomElement(AccordionPanelComponent, {
      injector: this.injector
    });
    customElements.define('accordion-panel', accordionPanelEl);

    const accordionPanelHeaderEl = createCustomElement(AccordionPanelHeaderComponent, {
      injector: this.injector
    });
    customElements.define('accordion-panel-header', accordionPanelHeaderEl);
  }
}
