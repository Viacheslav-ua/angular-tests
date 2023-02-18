import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncExampleComponent } from './async-example/async-example.component';
import { AsyncNgExampleComponent } from './async-ng-example/async-ng-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncExampleComponent,
    AsyncNgExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
