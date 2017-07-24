import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
