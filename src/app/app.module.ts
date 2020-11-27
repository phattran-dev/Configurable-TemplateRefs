import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationCardComponent } from './information-card/information-card-component.component';

import { CardBodyDirective } from './information-card/directives/card-body.directive';
import { CardFooterDirective } from './information-card/directives/card-footer.directive';
import { CardHeaderDirective } from './information-card/directives/card-header.directive';
import { CardHeaderComponent } from './information-card/components/card-header/card-header.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationCardComponent,
    CardHeaderDirective,
    CardBodyDirective,
    CardFooterDirective,
    CardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
