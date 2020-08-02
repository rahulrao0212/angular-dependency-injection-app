import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductService } from './product-service';
import { LogService } from './log-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, { provide: "log-service", useClass: LogService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
